/* eslint-disable react/prop-types */

const ProfileImage = ({ url }) => {
  return (
    <>
      <img
        src={url}
        alt="Profile"
        className="rounded-full h-9 w-9 object-cover"
      />
    </>
  );
};

export default ProfileImage;

