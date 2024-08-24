import GoogleProfile from '../../common/controls/google/googleProfile/googleProfile';
import Image from '../../common/controls/image/image';
import type { AppDispatch, RootState } from '../../common/store/store';
import { useSelector } from 'react-redux';
import './header.scss';
const Header = () => {
  const userEmail = useSelector(
    (state: RootState) => state.googleUserInfo.email
  );
  return (
    <div className="header">
      <div className="logo">
        <Image
          styleObj={{ height: '4rem' }}
          imageSrc="https://cdn-www.bluestacks.com/bs-images/logo-icon.png"
        />
        <Image
          styleObj={{ height: '3rem', marginLeft: '1rem' }}
          imageSrc="https://cdn-www.bluestacks.com/bs-images/logo-text.png"
        />
      </div>
      {userEmail && <GoogleProfile />}
    </div>
  );
};

export default Header;
