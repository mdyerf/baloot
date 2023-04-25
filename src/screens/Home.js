import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../routes';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import images from '../res/images';
import Page from '../components/Page';
import Row from '../components/Row';

function Home() {
  const [commodities, setCommodities] = useState([]);
  const [available, setAvailable] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchOption, setSearchOption] = useState('name');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    setCommodities([
      {
        id: 1,
        title: 'Phone',
        remaining: 0,
        pic: images.image.product,
        price: 100,
      },
      {
        id: 2,
        title: 'Phone 2',
        remaining: 2,
        pic: images.image.product,
        price: 100,
      },
      {
        id: 3,
        title: 'Phone 3',
        remaining: 2,
        pic: images.image.product,
        price: 100,
      },
    ]);
  }, [sortBy, available, searchOption, searchValue]);

  const navigate = useNavigate();

  const handleCardAdd = (id) => {
    console.log(`added id: ${id}`);
    // call add to card api
  };

  return (
    <>
      <Header
        showSearch
        searchValue={searchValue}
        searchOption={searchOption}
        onQueryChange={setSearchValue}
        onSearchOptionChange={setSearchOption}
      />
      <Page>
        <Filter available={available} sortBy={sortBy} onAvailableChange={setAvailable} onSortByChange={setSortBy} />
        <Row>
          {commodities.map((commodity) => (
            <ProductCard
              key={commodity.id}
              title={commodity.title}
              remaining={commodity.remaining}
              pic={commodity.pic}
              price={commodity.price}
              onAddToCard={() => handleCardAdd(commodity.id)}
              onClick={() => navigate(`${routes.product}/${commodity.id}`)}
            />
          ))}
        </Row>
      </Page>
      <Footer />
    </>
  );
}

export default Home;
