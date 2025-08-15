import userProfile from '@assets/icons/user-profile.svg';
import toast from 'react-hot-toast';

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
        className="cursor-pointer rounded-sm border border-primary bg-primary px-3 py-2.5 text-sm text-white"
        onClick={() => toast.error('🙏 아직 준비 중인 기능입니다')}
      >
        ⭐ 즐겨찾기
      </button>
      <button
        onClick={onLogout}
        className="cursor-pointer rounded-sm border border-primary bg-primary px-3 py-2.5 text-sm text-white"
      >
        👋 로그아웃
      </button>

      <button className="relative flex cursor-pointer items-center gap-1.5">
        <img src={userProfile} alt="profile" />
        <span className="text-sm">{user?.name}</span>
      </button>
    </div>
  );
};
export default UserMenu;
