import { NavLogo } from "./NavLogo";

export function Nav() {
  return (
    <nav className="w-screen h-20 mt-8">
      <div className="w-full h-full flex justify-center items-center">
        <NavLogo />
        <ul className="flex font-bold text-gray-700">
          <li className="px-4">
            <p className="hover:text-purple-700 
              relative before:content-[''] before:absolute 
              before:block before:w-full before:h-[2px] pb-1
              before:bottom-0 before:left-0 before:bg-purple-700
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">CONHEÇA A BLOX</p>
          </li>
          <li className="px-4">
            <p className="hover:text-purple-700 
              relative before:content-[''] before:absolute 
              before:block before:w-full before:h-[2px] pb-1
              before:bottom-0 before:left-0 before:bg-purple-700
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">SOLUÇÕES</p>
          </li>
          <li className="px-4">
            <p className="hover:text-purple-700 
              relative before:content-[''] before:absolute 
              before:block before:w-full before:h-[2px] pb-1
              before:bottom-0 before:left-0 before:bg-purple-700
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">POR ENSINO</p>
          </li>
          <li className="px-4">
            <p className="hover:text-purple-700 
              relative before:content-[''] before:absolute 
              before:block before:w-full before:h-[2px] pb-1
              before:bottom-0 before:left-0 before:bg-purple-700
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">BLOG</p>
          </li>
          <li className="px-4">
            <p className="hover:text-purple-700 
              relative before:content-[''] before:absolute 
              before:block before:w-full before:h-[2px] pb-1
              before:bottom-0 before:left-0 before:bg-purple-700
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">CONTATO</p>
          </li>
        </ul>
        <button className="text-white bg-blue-400 ml-28 px-10 py-3 rounded-md hover:bg-blue-600">
          AGENDAR DEMONSTRAÇÃO
        </button>
      </div>
    </nav>
  )
}
