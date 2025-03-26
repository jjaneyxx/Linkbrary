import userProfile from '../assets/images/user-profile.svg';

const UserMenu = () => {
  return (
    <div className="flex items-center gap-6">
      <button className="px-3 py-2.5 border border-[#6D6AFE] rounded-sm bg-[#E7EFFB] text-sm cursor-pointer">
        ⭐ 즐겨찾기
      </button>
      <button className="px-3 py-2.5 border border-[#6D6AFE] rounded-sm bg-[#E7EFFB] text-sm cursor-pointer">
        ☠️ 로그아웃
      </button>
      <button className="flex items-center gap-1.5 cursor-pointer relative">
        <img src={userProfile} alt="profile" />
        <span className="text-sm">이용섭</span>
      </button>
    </div>
  );
};
export default UserMenu;
