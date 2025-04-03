import userProfile from '@assets/icons/user-profile.svg';
import Button from '@components/common/Button';

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
      <button
        className="cursor-pointer rounded-sm border border-[#6D6AFE] bg-[#E7EFFB] px-3 py-2.5 text-sm"
        onClick={() => alert('🙏 아직 준비 중인 기능이에요')}
      >
        ⭐ 즐겨찾기
      </button>
      <Button text="로그아웃" className="px-3 py-2.5 text-sm" onClick={onLogout} type="button" />
      <button className="relative flex cursor-pointer items-center gap-1.5">
        <img src={userProfile} alt="profile" />
        <span className="text-sm">{user?.name}</span>
      </button>
    </div>
  );
};
export default UserMenu;
