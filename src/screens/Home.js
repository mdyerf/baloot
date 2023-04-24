import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

function Home() {
  const [commodities, setCommodities] = useState([]);
  const [available, setAvailable] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    setCommodities([
      {
        title: 'Phone',
        remaining: 2,
        pic: require('../assets/Product.png'),
        price: 100,
      },
      {
        title: 'Phone 2',
        remaining: 2,
        pic: require('../assets/Product.png'),
        price: 100,
      },
      {
        title: 'Phone 3',
        remaining: 2,
        pic: require('../assets/Product.png'),
        price: 100,
      }
    ]);
  }, [sortBy, available]);

  return (
    <>
      <Header showSearch />
      <div class="page-container">
        <Filter
          available={available}
          sortBy={sortBy}
          onAvailableChange={setAvailable}
          onSortByChange={setSortBy}
        />

        <div class="products">
          {commodities.map(commodity => (
            <ProductCard
              key={commodity.title}
              title={commodity.title}
              remaining={commodity.remaining}
              pic={commodity.pic}
              price={commodity.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
