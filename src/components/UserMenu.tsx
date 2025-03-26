import userProfile from '../assets/images/user-profile.svg';
import { useState } from 'react';

const UserMenu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const handleDropDownOpen = () => {
    console.log('모달 열림');
    setIsDropDownOpen(true);
  };
  return (
    <div className="flex items-center gap-6">
      <button className="px-3 py-2.5 border border-[#6D6AFE] rounded-sm bg-[#E7EFFB] text-sm cursor-pointer">
        ⭐ 즐겨찾기
      </button>
      <button className="flex items-center gap-1.5 cursor-pointer" onClick={handleDropDownOpen}>
        <img src={userProfile} alt="profile" />
        <span className="text-sm">이용섭</span>
      </button>
      {isDropDownOpen && <div>열림</div>}
    </div>
  );
};
export default UserMenu;
