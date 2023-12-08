/* eslint-disable no-unused-vars */
import Post from "../post/Post";

const Content = () => {
  const demo1 =
    "https://previews.123rf.com/images/ksuperksu/ksuperksu1507/ksuperksu150700065/43127786-blue-flat-style-square-shaped-female-character-icon-with-shadow-illustration-of-an-attractive-asian.jpg";

  let arr = [
    {
      name: "Karina Saif",
      url: "https://png.pngtree.com/background/20210710/original/pngtree-blue-big-data-financial-management-banner-picture-image_1016088.jpg",
      para: "The Sanskrit term Shiv is absolutely mind-blowing! It radiates benevolence and auspiciousness like no other",
      profile: demo1,
    },
    {
      name: "Virat Kohli",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTL7AqERAWw2gC08q6_P-pQdc2jt_uB98LVS8_RXPevtTXPg9JuGKUcNdBTjXhgaBhZo0&usqp=CAU",
      para: "The Sanskrit term Shiv is absolutely mind-blowing! It radiates benevolence and auspiciousness like no other",
      profile: demo1,
    },
    {
      name: "Karina Saif",
      url: "https://png.pngtree.com/background/20210710/original/pngtree-blue-big-data-financial-management-banner-picture-image_1016088.jpg",
      para: "The Sanskrit term Shiv is absolutely mind-blowing! It radiates benevolence and auspiciousness like no other",
      profile: demo1,
    },
  ];

  return (
    <div className="bg-white rounded-md w-full">
      {/* contentbar */}
      <div className="w-full flex gap-24 py-3 border-b border-gray-300 px-5 text-sm font-bold text-zinc-500">
        <h3 className="hover:text-slate-950 cursor-pointer">About</h3>
        <h3 className="hover:text-slate-950 cursor-pointer">
          Skills & Certificate
        </h3>
        <h3 className="hover:text-slate-950 cursor-pointer">Posts</h3>
        <h3 className="hover:text-slate-950 cursor-pointer">Spaces</h3>
      </div>
      {/* content */}
      <div className="px-5 pt-4">
        {arr.map((ele, index) => {
          return (
            <Post
              key={index}
              name={ele.name}
              url={ele.url}
              para={ele.para}
              profile={ele.profile}
            />
          );
        })}

        <Post />
      </div>
    </div>
  );
};

export default Content;
