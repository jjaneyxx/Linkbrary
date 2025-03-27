import logo from '../../../assets/icons/logo.svg';
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
        <img src={logo} alt="logo" className="h-[38px] mb-4" />
      </Link>
      <div className="flex mb-[30px] gap-2">
        <div>{prompt}</div>
        <Link to={linkTo} className="text-primary font-semibold underline decoration-auto">
          {linkText}
        </Link>
      </div>
    </div>
  );
};
export default AuthPrompt;
