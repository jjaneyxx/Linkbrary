import landingFolder from '@assets/images/landing-folder.png';
import landingHome from '@assets/images/landing-home.png';
import landingSave from '@assets/images/landing-save.png';
import landingSearch from '@assets/images/landing-search.png';
import landingShare from '@assets/images/landing-share.png';
import Button from '@components/common/Button';
import { useAuth } from '@contexts/AuthContext';

const Landing: React.FC = () => {
  const { handleLogin } = useAuth();
  return (
    <div>
      <section className="bg-gray-100 text-center">
        <div className="flex flex-col text-[64px] leading-tight font-bold">
          <span className="mt-[70px] bg-gradient-to-r from-[#F59E0B] to-[#FF9F9F] bg-[length:75%] bg-clip-text text-transparent">
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
          <div className="mt-2.5 flex flex-col text-base font-medium text-[#6B6B6B]">
            <span>나중에 읽고 싶은 글, 다시 보고 싶은 영상,</span>
            <span>사고 싶은 옷, 기억하고 싶은 모든 것을</span>
            <span>한 공간에 저장하세요</span>
          </div>
        </div>
        <img src={landingSave} className="w-[550px]" />
      </section>

      <section className="flex justify-center py-[50px]">
        <div className="flex items-center justify-between gap-[157px]">
          <img src={landingFolder} className="w-[550px]" />
          <div className="h-fit w-fit">
            <span className="text-[48px] leading-tight font-bold text-black">
              링크를 폴더로
              <br />
              <span className="bg-gradient-to-r from-[#efe1bb] to-[#A4CEFF] bg-clip-text text-transparent">
                관리
              </span>
              하세요
            </span>
            <div className="mt-2.5 flex flex-col text-base font-medium text-[#6B6B6B]">
              <span>나만의 폴더를 무제한으로 만들고</span>
              <span> 다양하게 활용할 수 있습니다.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center py-[50px]">
        <div className="flex items-center justify-between gap-[157px]">
          <div className="h-fit w-fit">
            <span className="text-[48px] leading-tight font-bold text-black">
              저장한 링크를
              <br />
              <span className="bg-gradient-to-r from-[#b5bde6] to-[#9fb3cd] bg-clip-text text-transparent">
                공유
              </span>
              해 보세요
            </span>
            <div className="mt-2.5 flex flex-col text-base font-medium text-[#6B6B6B]">
              <span>여러 링크를 폴더에 담고 공유할 수 있습니다.</span>
              <span> 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.</span>
            </div>
          </div>
          <img src={landingShare} className="w-[550px]" />
        </div>
      </section>

      <section className="flex justify-center py-[50px]">
        <div className="flex items-center justify-between gap-[157px]">
          <img src={landingSearch} className="w-[550px]" />
          <div className="h-fit w-fit">
            <span className="text-[48px] leading-tight font-bold text-black">
              저장한 링크를
              <br />
              <span className="bg-gradient-to-r from-[#c4ecf6] to-[#9ab9d6] bg-clip-text text-transparent">
                검색
              </span>
              해 보세요
            </span>
            <div className="mt-2.5 flex flex-col text-base font-medium text-[#6B6B6B]">
              <span>중요한 정보들을 검색으로 쉽게 찾아보세요.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Landing;
