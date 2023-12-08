/* eslint-disable no-unused-vars */
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import SearchBar from "../searchbar/SearchBar";
import ProfileImage from "../profileImage/ProfileImage";

const Navbar = () => {
  const demo1 =
    "https://previews.123rf.com/images/ksuperksu/ksuperksu1507/ksuperksu150700065/43127786-blue-flat-style-square-shaped-female-character-icon-with-shadow-illustration-of-an-attractive-asian.jpg";
  return (
    <div className="fixed top-0 left-0 w-full lg:flex lg:gap-4 justify-end bg-white py-5 px-8 hidden">
      <SearchBar />
      <div className="border border-solid border-gray-200  rounded-md p-1">
        <BellIcon className="h-6 w-6 text-indigo-500 group-hover:text-white cursor-pointer" />
      </div>
      <div className="border border-solid border-gray-200  rounded-md p-1">
        <EnvelopeIcon className="h-6 w-6 text-indigo-500 group-hover:text-white cursor-pointer" />
      </div>
      <div>
        <ProfileImage url={demo1} />
      </div>
    </div>
  );
};

export default Navbar;
