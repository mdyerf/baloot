import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../routes';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Page from '../components/Page';
import Row from '../components/Row';
import { commodities as mockCommodities } from '../mock/commodities';

function Home() {
  const [commodities, setCommodities] = useState([]);
  const [available, setAvailable] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchOption, setSearchOption] = useState('name');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    setCommodities(mockCommodities);
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
        <Row justifyContent="center">
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
