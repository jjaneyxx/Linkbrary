import googleLogin from '../../../assets/icons/google-login.svg';
import kakaoLogin from '../../../assets/icons/kakao-login.svg';

const OAuthSection = () => {
  return (
    <div className="bg-gray-200 border border-gray-300 px-6 py-3 w-full flex justify-between rounded-lg items-center">
      <span className="text-[#373740]">소셜 로그인</span>
      <div className="flex gap-4 ">
        <button className="cursor-pointer">
          <img src={googleLogin} alt="구글 로그인" />
        </button>
        <button className="cursor-pointer">
          <img src={kakaoLogin} alt="카카오 로그인" />
        </button>
      </div>
    </div>
  );
};
export default OAuthSection;
