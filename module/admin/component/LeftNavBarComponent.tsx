export interface LeftNavBarComponentPropsInterface {}
// template source : https://tailwindcomponents.com/component/tailwind-css-admin-dashboard-layout/landing
export default function LeftNavBarComponent(
  props: LeftNavBarComponentPropsInterface
) {
  return (
    <aside className="hidden lg:block lg:flex-shrink-0">
      <div className="h-full relative flex flex-col w-48 bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 flex flex-col">
          <nav className="mt-5 flex-1" aria-label="Sidebar">
            <div className="px-2 space-y-1">
              <a
                href="#"
                className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  className="text-gray-500 mr-3 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Projects
              </a>
              <a
                href="#"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14.318V5a2 2 0 00-2-2H7a2 2 0 00-2 2v9.318a2 2 0 00.894 1.658l5.053 3.316a2 2 0 002.105 0l5.053-3.316a2 2 0 00.894-1.658z"></path>
                  <path d="M15 18h4a2 2 0 002-2v-1.682a1 1 0 00-.445-.832l-5.053-3.316a2 2 0 00-2.105 0l-5.053 3.316A1 1 0 005 14.318V16a2 2 0 002 2h4"></path>
                </svg>
                Calendar
              </a>
              <a
                href="#"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Documents
              </a>
              <a
                href="#"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h18v18H3zM8 9h8M8 15h8M3 9h.01M3 15h.01"></path>
                </svg>
                Reports
              </a>
            </div>
            <div className="mt-auto pt-6">
              <div className="px-2 space-y-1">
                <a
                  href="#"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Settings
                </a>
                <a
                  href="#"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  Logout
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  )
}
