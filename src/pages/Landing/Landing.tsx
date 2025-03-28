import Button from '../../components/common/Button';
import landingHome from '../../assets/images/landing-home.png';
import landingSave from '../../assets/images/landing-save.png';
import { useAuth } from '../../contexts/AuthContext';

const Landing: React.FC = () => {
  const { handleLogin } = useAuth();
  return (
    <div>
      <section className="bg-gray-100 text-center">
        <div className="flex flex-col text-[64px] leading-tight font-bold">
          <span className="mt-[70px] bg-gradient-to-r from-[#6D6AFE] to-[#FF9F9F] bg-[length:75%] bg-clip-text text-transparent">
            세상의 모든 정보<span className="text-black">를</span>
          </span>
          쉽게 저장하고 관리해 보세요
        </div>
        <Button
          text="링크 추가하기"
          className="mt-10 w-[350px] py-4"
          type="button"
          onClick={handleLogin}
        />
        <img src={landingHome} />
      </section>
      <section className="mt-[120px] mb-[50px] flex items-center justify-center gap-[157px]">
        <div className="flex flex-col text-[48px] leading-tight font-bold">
          <span className="bg-gradient-to-r from-[#FE8A8A] to-[#A4CEFF] bg-clip-text text-transparent">
            원하는 링크<span className="text-black">를</span>
          </span>
          저장하세요
          <div className="flex flex-col text-base font-medium text-[#6B6B6B]">
            <span>나중에 읽고 싶은 글, 다시 보고 싶은 영상,</span>
            <span>사고 싶은 옷, 기억하고 싶은 모든 것을</span>
            <span>한 공간에 저장하세요</span>
          </div>
        </div>
        <img src={landingSave} className="w-[550px]" />
      </section>
    </div>
  );
};
export default Landing;
