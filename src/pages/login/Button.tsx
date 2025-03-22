import loginBtn from '../../assets/images/login-btn.svg';

const Button = () => {
  return (
    <div>
      <button type="submit" className="mb-8 cursor-pointer">
        <img src={loginBtn} />
      </button>
    </div>
  );
};
export default Button;
