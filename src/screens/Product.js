import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetails from '../components/ProductDetails';
import Page from '../components/Page';

function Product() {
  const product = {
    title: 'Huawei nova 9',
    provider: 'Huawei',
    categories: ['IT', 'Technology'],
    price: 300,
    remaining: 5,
    rate: 4.1,
    rateNums: 12,
  };

  return (
    <>
      <Header showSearch={false} />

      <Page>
        <ProductDetails
          title={product.title}
          remaining={product.remaining}
          price={product.price}
          categories={product.categories}
          rate={product.rate}
          rateNums={product.rateNums}
          provider={product.provider}
        />
      </Page>

      <Footer />
    </>
  );
}

export default Product;
