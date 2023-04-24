import React from 'react';
import images from '../res/images';
import Text from './Text';
import Input from './Input';
import Button from './Button';

function Header({ showSearch }) {
  
  const user = {username: 'nigga', credit: 100};

  return (
    <header class="header">
      <div class="header__logo">
        <img class="header__logo__image" src={images.image.baloot} alt="Baloot" />
        <Text className="header__logo__text" size="xlarge">Baloot</Text>
      </div>

      {showSearch ? (
        <div class="header__search">
          <select class="header__search__options">
            <option value="name">name</option>
            <option value="price">price</option>
          </select>
          <Input type="text" variant="contained" placeholder="search your product ..." />
          <div class="header__search__magnifier">
            <img src={images.image.magnifier} alt="" />
          </div>
        </div>
      ) : <div className='header__search' />}

      {!user ? (
        <>
          <Button text="Register" />
          <Button text="Login" />
        </>
      ) : (
        <>
          <Text size="medium">#{user.username}</Text>
          <Button text={`Cart ${user.credit}`} />
        </>
      )}

    </header>
  );
}

export default Header;
