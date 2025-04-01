import userProfile from '@assets/icons/user-profile.svg';

type UserMenuProps = {
  onLogout: () => void;
  user?: {
    id: number;
    name: string;
    imageSource: string;
    email: string;
    createdAt: string;
  };
};

const UserMenu = ({ onLogout, user }: UserMenuProps) => {
  return (
    <div className="flex items-center gap-6">
      <button className="cursor-pointer rounded-sm border border-[#6D6AFE] bg-[#E7EFFB] px-3 py-2.5 text-sm">
        ⭐ 즐겨찾기
      </button>
      <button
        onClick={onLogout}
        className="cursor-pointer rounded-sm border border-[#6D6AFE] bg-[#E7EFFB] px-3 py-2.5 text-sm"
      >
        ☠️ 로그아웃
      </button>
      <button className="relative flex cursor-pointer items-center gap-1.5">
        <img src={userProfile} alt="profile" />
        <span className="text-sm">{user?.name}</span>
      </button>
    </div>
  );
};
export default UserMenu;
