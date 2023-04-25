import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import images from '../res/images';
import Text from './Text';
import Input from './Input';
import Button from './Button';
import routes from '../routes';

function Header({ showSearch, searchOption, searchValue, onQueryChange, onSearchOptionChange }) {
  const user = { username: 'nigga', credit: 100 };

  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__logo" onClick={() => navigate(routes.home)}>
        <img className="header__logo__image" src={images.image.baloot} alt="Baloot" />
        <Text className="header__logo__text" size="xlarge">
          Baloot
        </Text>
      </div>

      {showSearch ? (
        <div className="header__search">
          <select
            value={searchOption}
            onChange={(e) => onSearchOptionChange(e.target.value)}
            className="header__search__options"
          >
            <option value="name">name</option>
            <option value="price">price</option>
          </select>
          <Input
            value={searchValue}
            onChange={(e) => onQueryChange(e.target.value)}
            type="text"
            variant="contained"
            placeholder="search your product ..."
          />
          <div className="header__search__magnifier">
            <img src={images.image.magnifier} alt="" />
          </div>
        </div>
      ) : (
        <div className="header__search" />
      )}

      {!user ? (
        <>
          <Button text="Register" onClick={() => navigate(routes.login)} />
          <Button text="Login" onClick={() => navigate(routes.login)} />
        </>
      ) : (
        <>
          <Text size="medium">#{user.username}</Text>
          <Button text={`Cart ${user.credit}`} onClick={() => navigate(routes.user)} />
        </>
      )}
    </header>
  );
}

Header.propTypes = {
  showSearch: PropTypes.bool.isRequired,
  searchOption: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onSearchOptionChange: PropTypes.func.isRequired,
};

export default Header;
