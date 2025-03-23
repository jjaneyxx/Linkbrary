import AuthPrompt from '../../components/common/auth/AuthPrompt';

const Signup: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <AuthPrompt prompt="이미 회원이신가요?" linkText="로그인 하기" linkTo="/login" />
    </div>
  );
};
export default Signup;
