import { RxHamburgerMenu } from "react-icons/rx"
import { HiOutlineBuildingStorefront } from "react-icons/hi2"
import { RiContactsBookLine, RiPagesLine } from "react-icons/ri"
import { BsChatRightQuote } from "react-icons/bs"
import { CiShoppingTag } from "react-icons/ci"
import { IconType } from "react-icons/lib"

export interface LeftNavBarComponentPropsInterface {}

export interface MenuItemsInterface {
  name: string
  icon: IconType
  link: string
}
// template source : https://tailwindcomponents.com/component/tailwind-css-admin-dashboard-layout/landing
export default function LeftNavBarComponent(
  props: LeftNavBarComponentPropsInterface
) {
  const menuItems: MenuItemsInterface[] = [
    {
      icon: RxHamburgerMenu,
      name: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      icon: RiContactsBookLine,
      name: "Contacts",
      link: "/admin/projects",
    },
    {
      icon: HiOutlineBuildingStorefront,
      name: "Companies",
      link: "/admin/documents",
    },
    {
      icon: RiPagesLine,
      name: "Pages",
      link: "/admin/page",
    },
    {
      icon: BsChatRightQuote,
      name: "Devis",
      link: "/admin/settings",
    },
    {
      icon: CiShoppingTag,
      name: "produits",
      link: "/admin/logout",
    },
  ]

  return (
    <aside className="hidden lg:block lg:flex-shrink-0">
      <div className="h-full relative flex flex-col w-48 bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 flex flex-col">
          <nav className="mt-5 flex-1" aria-label="Sidebar">
            <div className="px-2 space-y-1">
              <MenuItems menuItems={menuItems}></MenuItems>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  )
}

function MenuItems(props: { menuItems: MenuItemsInterface[] }) {
  return (
    <div className="flex flex-col">
      {props.menuItems.map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
        >
          <item.icon className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" />
          <span className="ml-3">{item.name}</span>
        </a>
      ))}
    </div>
  )
}
