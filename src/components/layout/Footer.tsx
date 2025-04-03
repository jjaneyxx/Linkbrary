import facebookIcon from '@assets/icons/footer-facebook.svg';
import instagramIcon from '@assets/icons/footer-instagram.svg';
import tweeterIcon from '@assets/icons/footer-tweeter.svg';
import youtubeIcon from '@assets/icons/footer-youtube.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="mt-25 h-40 bg-black px-26 pt-8 pb-27">
      <div className="flex justify-between">
        <span className="text-[#676767]">©codeit - 2025</span>
        <div className="flex justify-between gap-7.5">
          <Link to="/privacy" className="text-[#CFCFCF]">
            Privacy Policy
          </Link>
          <Link to="/faq" className="text-[#CFCFCF]">
            FAQ
          </Link>
        </div>
        <div className="flex gap-3">
          <a>
            <img src={facebookIcon} alt="facebook logo" className="cursor-pointer" />
          </a>
          <a>
            <img src={tweeterIcon} alt="tweeter logo" className="cursor-pointer" />
          </a>
          <a>
            <img src={youtubeIcon} alt="youtube logo" className="cursor-pointer" />
          </a>
          <a>
            <img src={instagramIcon} alt="instagram logo" className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
