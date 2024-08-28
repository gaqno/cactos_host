import { PrimeReactPTOptions } from "primereact/api";
import { classNames } from "primereact/utils";
import Tailwind from 'primereact/passthrough/tailwind';

const Theme = {
  unstyled: true,
  pt: {
    ...Tailwind,
    fieldset: {
      root: {
        className: 'border border-gray-200 dark:border-gray-800 p-4 rounded-lg',
      },
      content: {
        className: (props: any) => classNames('gap-2 mb-3', props.className),
      }
    },
    button: {
      root: () => ({
        className: classNames(
          'font-sans text-gray-600 dark:text-white/80 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
          'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
          'opacity-60 cursor-pointer',
          'text-lg px-4 py-4',
          'p-3 text-base'
        )
      })
    },
    card: {
      ...Tailwind.card,
      root: () => ({
        className: classNames(
          'border border-gray-200 dark:border-gray-800 rounded-lg',
          'bg-white dark:bg-gray-900',
          'p-4'
        )
      }),
      title: () => ({
        className: classNames(
          'text-lg font-ligth',
          'text-gray-700 dark:text-white/80',
          'dark:border-gray-800',
        )
      }),
    },
    panelmenu: {
      root: () => ({
        className: classNames(
          'border border-gray-200 dark:border-gray-800 rounded-lg w-auto'
        )
      }),
      container: {
        className: classNames(
          'border-b border-gray-200 dark:border-gray-800'
        )
      },
      item: {
        className: classNames(
          'text-gray-700 dark:text-white/80',
          'px-6 py-3',
          'dark:border-gray-800',
        )
      },
      submenu: {
        className: classNames(
          'text-gray-700 dark:text-white/80',
          'px-6 py-3',
          'dark:border-gray-800',
        )
      },
    },
    datatable: {
      root: () => ({
        className: classNames('border border-gray-200 dark:border-gray-800 rounded-lg')
      }),
      header: {
        container: {
          className: classNames(
            'bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800',
          )
        },
        cell: {
          className: classNames(
            'text-gray-700 dark:text-white/80 font-medium',
            'px-6 py-3',
            'dark:border-gray-800',
          )
        },
      },
      body: {
        cell: {
          className: classNames(
            'text-gray-700 dark:text-white/80',
            'px-6 py-4 whitespace-nowrap',
            'dark:border-gray-800',
          )
        },
      },
      paginator: {
        container: {
          className: classNames(
            'flex items-center justify-between',
            'bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800',
            'px-6 py-3',
          )
        },
        pages: {
          className: classNames(
            'flex items-center gap-2',
          )
        },
        dropdown: {
          className: classNames(
            'flex items-center gap-2',
          )
        },
        currentPageReport: {
          className: classNames(
            'text-gray-700 dark:text-white/80',
          )
        },
        button: {
          className: classNames(
            'font-sans text-gray-600 dark:text-white/80 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
            'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
            'opacity-60 cursor-pointer',
            'text-lg px-4 py-4',
            'p-3 text-base'
          )
        },
      },
    }
  } as PrimeReactPTOptions,
}

export default Theme;