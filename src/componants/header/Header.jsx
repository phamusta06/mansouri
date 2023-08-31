import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HashLink as Link } from "react-router-hash-link";

const navigation = [
  { name: "HOME", href: "#home", current: true },
  { name: "ABOUT", href: "#about", current: false },
  { name: "RESUM", href: "#resum", current: false },
  { name: "SERVICE", href: "#service", current: false },
  { name: "CONTACT", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  
  const [currentItem, setCurrentItem] = useState(navigation.find(item => item.current));

  const handleItemClick = (item) => {
    setCurrentItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const newCurrentItem = navigation.find(item => {
        const target = document.querySelector(item.href);
        if (target) {
          const rect = target.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > 0;
        }
        return false;
      });

      if (newCurrentItem !== currentItem) {
        setCurrentItem(newCurrentItem);
      }

      // تحديث لون خلفية القائمة وفقًا للتمرير
      const nav = document.getElementById("na");
      if (window.scrollY > 2) {
        nav.classList.remove("md:bg-transparent");
        nav.classList.add("md:bg-white");
      } else {
        nav.classList.remove("md:bg-white");
        nav.classList.add("md:bg-transparent");
      }
    };

    // الاستماع لحدث التمرير
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentItem]);


  return (
    <Disclosure
      as="nav"
      id="na"
      className="nav fixed w-full bg-white top-0 md:flex md:justify-center z-50 md:bg-transparent md:fixed"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center"></div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        smooth
                        onClick={() => handleItemClick(item)}
                        className={classNames(
                          item === currentItem
                            ? "bg-gray-900 text-white"
                            : "text-blue-400 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
  {({ close }) => (
    <div className="space-y-1 px-2 pb-3 pt-2">
      {navigation.map((item) => (
        <Link
          key={item.name}
          as="a"
          smooth
          to={item.href}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "block rounded-md px-3 py-2 text-base font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
          // إغلاق قائمة الهاتف عند النقر
          onClick={() => {
            close();
            handleItemClick(item);
          }}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )}
</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}