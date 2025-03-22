import googleLogin from '../../assets/images/google-login.svg';
import kakaoLogin from '../../assets/images/kakao-login.svg';

const OAuthSection = () => {
  return (
    <div className="bg-gray-200 border-gray-300 px-4 py-3 ">
      <span>소셜로그인</span>
      <div className="flex">
        <img src={googleLogin} />
        <img src={kakaoLogin} />
      </div>
    </div>
  );
};
export default OAuthSection;
