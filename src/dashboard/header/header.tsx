import { useSelector } from 'react-redux';

import { Type } from '../../common/const';
import GoogleProfile from '../../common/controls/google/googleProfile/googleProfile';
import Image from '../../common/controls/image/image';
import Label from '../../common/controls/label/label';
import { Typography } from '../../common/theme/typography/typography';
import Environment from '../../environment';

import './header.scss';

import type { RootState } from '../../common/store/store';
const Header = () => {
  const userEmail = useSelector(
    (state: RootState) => state.googleUserInfo.email
  );
  return (
    <div className="header">
      <div className="env-logo">
        <Label
          className="env"
          textId={Environment.ENV}
          typography={Typography.title_header}
          type={Type.primary}
        ></Label>
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
      </div>
      {userEmail && <GoogleProfile />}
    </div>
  );
};

export default Header;
