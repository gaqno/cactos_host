import { useMemo } from "react";
import { listRoutes } from "../listRoutes";
import { getUrlsFromArray } from "../../utils/getUrlsFromArray";
import { menu } from "../../mocks";
import LoadingPage from "../../ui/templates/LoadingPage";
import DefaultLayout from "../../DefaultLayout";

export function useRouter() {
  const arrayRoutes = useMemo(() => {
    const arr = menu && getUrlsFromArray(menu as any);
    const listRenderRoutes = arr
      ? arr
        .map((item) => ({
          ...listRoutes[item || ""],
        }))
        .filter((item) => item)
      : [];
    return [...listRenderRoutes];
  }, [menu]);

  const routes = [
    {
      path: "/",
      Component: DefaultLayout,
      ErrorBoundary: () => <div>Erro</div>,
      loader: () => <LoadingPage />,
      children: arrayRoutes,
    },
  ];
  return { routes };
}
