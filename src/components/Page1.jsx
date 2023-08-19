import { Menu } from "@headlessui/react";
import {
    HomeIcon,
    CogIcon,
    UsersIcon,
    PhoneIcon,
  } from '@heroicons/react/24/outline';
import {  Transition } from '@headlessui/react';

  
function Page1() {
    return (
        <div className="m-8">
          <h1 className="text-xl font-bold">ドロップダウンメニュー</h1>
          <Menu>
            <Menu.Button className="px-4 py-2 border rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-bold">
              Menu
            </Menu.Button>
            <Transition
  enter="transition duration-300 ease-out"
  enterFrom="transform scale-95 opacity-0"
  enterTo="transform scale-100 opacity-100"
  leave="transition duration-300 ease-out"
  leaveFrom="transform scale-100 opacity-100"
  leaveTo="transform scale-95 opacity-0"
>
            <Menu.Items
              as="ul"
              className="w-[200px] divide-y border rounded-lg mt-2"
            >
              <Menu.Item as="li">
                {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    } p-2 w-full flex items-center rounded-t-lg`}
                    href="/"
                  >
                    <HomeIcon className="w-5 y-5 mr-2" />
                    Home
                  </a>
                )}
              </Menu.Item>
              <Menu.Item as="li">
                {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    } p-2 w-full flex items-center`}
                    href="/service"
                  >
                    <CogIcon className="w-5 y-5 mr-2" />
                    Service
                  </a>
                )}
              </Menu.Item>
              <Menu.Item as="li">
                {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    } p-2 w-full flex items-center`}
                    href="/about"
                  >
                    <UsersIcon className="w-5 y-5 mr-2" />
                    About us
                  </a>
                )}
              </Menu.Item>
              <Menu.Item as="li">
                {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    } p-2 w-full flex items-center rounded-b-lg`}
                    href="/contact"
                  >
                    <PhoneIcon className="w-5 y-5 mr-2" />
                    Contact
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
            </Transition>
          </Menu>
        </div>
      );
    }
    
  
  export default Page1;