import logo from '@assets/icons/logo.svg';
import { Link } from 'react-router-dom';

type AuthPromptProps = {
  prompt: string;
  linkText: string;
  linkTo: string;
};

const AuthPrompt = ({ prompt, linkText, linkTo }: AuthPromptProps) => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" className="mb-4 h-[38px]" />
      </Link>
      <div className="mb-[30px] flex gap-2">
        <div>{prompt}</div>
        <Link to={linkTo} className="text-primary font-semibold underline decoration-auto">
          {linkText}
        </Link>
      </div>
    </div>
  );
};
export default AuthPrompt;
