import Content from "../content/Content";
import Navbar from "../navbar/Navbar";
import SideBar from "../sidebar/SideBar";

const Layout = () => {
  return (
    <div className="w-screen flex ">
      <div className="w-full lg:w-60">
        <SideBar />
      </div>

      <div className="relative w-full lg:w-4/5 pt-20">
        <div className="">
          <Navbar />
        </div>
        {/* Blue Baground */}
        <div className="hidden lg:flex bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 h-52 rounded-md"></div>

        {/* content */}
        <div className="w-full lg:flex lg:gap-1">
          {/* profilebar */}
          <div className="w-full lg:w-80 bg-orange-300 h-10"></div>
          {/* content */}
          <div className="w-full lg:w-9/1 py-3 px-2  ">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
