/* eslint-disable react/prop-types */
import ProfileImage from "../profileImage/ProfileImage";
import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { ShareIcon } from "@heroicons/react/24/solid";

const Post = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { name, url, para, profile } = props;

  return (
    <div className="border-b border-gray-300 pt-8">
      <div className="flex justify-between">
        <div className="flex pb-2">
          <ProfileImage url={profile} />

          <div className="px-2">
            <div>
              <h2 className="text-gray-700 text-sm font-bold">{name}</h2>
              <p className="text-sm text-gray-600">
                <span className="text-xs text-gray-400">14 min ago </span> Figma
                Community
              </p>
            </div>
            <div className="text-gray-700 text-sm">{para}</div>
          </div>
        </div>
        <div className="flex gap-4">
          <PencilIcon className="h-3 w-3 text-indigo-600 cursor-pointer group-hover:text-white" />
          <TrashIcon className="h-3 w-3 text-indigo-600 cursor-pointer group-hover:text-white" />
        </div>
      </div>
      <div className="bg-gray-700 h-44 rounded-md overflow-hidden">
        <img src={url} className="w-full h-full object-cover" />
      </div>

      <div className="flex items-center gap-10 pt-3 pb-8">
        <div className=" flex items-center gap-2">
          <HandThumbUpIcon className="h-5 w-5 cursor-pointer text-indigo-600 group-hover:text-white" />
          <span className="text-gray-400 text-sm font-bold">1.9k</span>
        </div>
        <div className=" flex items-center gap-2">
          <ChatBubbleBottomCenterIcon className="h-5 w-5 cursor-pointer text-indigo-600 group-hover:text-white" />
          <span className="text-gray-400 text-sm font-bold">45</span>
        </div>
        <div className=" flex items-center gap-2">
          <ShareIcon className="h-5 w-5 cursor-pointer text-indigo-600 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Post;
