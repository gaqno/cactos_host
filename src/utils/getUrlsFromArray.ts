/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMenu {
  id: number;
  titulo: string;
  tooltip: string;
  url: string;
  externo: boolean;
  icone: string;
  novaAba: boolean;
  subMenus: IMenu[];
  target?: string;
}

export function getUrlsFromArray(array: IMenu[]) {
  let urls: string[] = [];

  array.forEach((item) => {
    if (item.url) {
      urls.push(item.url.replace(/^\//, ""));
    }

    if (item.subMenus && item.subMenus.length > 0) {
      urls = urls.concat(getUrlsFromArray(item.subMenus));
    }
  });

  return urls;
}

export function findMenu(
  array: IMenu[] | undefined,
  location: string
): IMenu | null {
  const pathFix = array.find((item) => item.url === location);

  if (pathFix) {
    return pathFix;
  }

  return array?.reduce((find: any, current: any) => {
    if (find) return find;

    if (`/${current?.url}` === location) {
      return current;
    }

    if (current?.subMenus && current?.subMenus.length > 0) {
      return findMenu(current.subMenus, location);
    }

    return null; // Retorna null se a URL não for encontrada neste objeto
  }, null);
}
