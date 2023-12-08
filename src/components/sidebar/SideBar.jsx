/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { ArrowTrendingDownIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import ProfileImage from "../profileImage/ProfileImage";

const SideBar = () => {
  const demoPic =
    "https://alumni.cusat.ac.in/wp-content/themes/cera/assets/images/avatars/user-avatar.png";
  const demo1 =
    "https://previews.123rf.com/images/ksuperksu/ksuperksu1507/ksuperksu150700065/43127786-blue-flat-style-square-shaped-female-character-icon-with-shadow-illustration-of-an-attractive-asian.jpg";
  return (
    <div>
      {/* Mobile menu button*/}
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-0 left-0 inline-flex items-center justify-center peer rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <Bars3Icon className="block md:hidden h-6 w-6" aria-hidden="true" />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-2xl flex items-center gap-1 text-center cursor-pointer font-bold text-gray-600 border-b border-gray-300 pb-4 w-full">
              <GlobeAltIcon className="h-9 w-9 pt-1 text-indigo-500 group-hover:text-white " />
              spehre
            </h1>

            <div className=" my-4 border-b border-gray-300 pb-4">
              <div className="flex mb-2 justify-start items-center gap-3 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <Squares2X2Icon className="h-7 w-7 text-indigo-500 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Home
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-3 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BriefcaseIcon className="h-7 w-7 text-indigo-500 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Job Invites
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-3 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ArrowTrendingDownIcon className="h-7 w-7 text-indigo-500 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Analytics
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-3 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <UserIcon className="h-7 w-7 text-indigo-500 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  My Profile
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-3 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CodeBracketIcon className="h-7 w-7 text-indigo-500 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Explore
                </h3>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-1xl flex items-center gap-1 text-center cursor-pointer font-bold text-blue-950 pb-4 w-full">
              Communities Feed
            </h1>
            <div className=" my-4 pb-4">
              <div className="flex mb-2 justify-start items-center gap-3 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ProfileImage url={demoPic} />
                <h3 className="text-sm text-gray-800 group-hover:text-white font-semibold ">
                  Indonesia UI Designer
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-3 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ProfileImage url={demo1} />
                <h3 className="text-sm text-gray-800 group-hover:text-white font-semibold ">
                  Prototyping Club
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

export default SideBar;
