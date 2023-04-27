import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetails from '../components/ProductDetails';
import Page from '../components/Page';
import Comments from '../components/Comments';
import Suggestions from '../components/Suggestions';
import { product as mockProduct } from '../mock/commodities';

function Product() {
  const product = mockProduct;

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
          providerId={product.providerId}
        />
        <Comments comments={product.comments} />
        <Suggestions title="You also might like..." products={product.suggestions} />
      </Page>

      <Footer />
    </>
  );
}

export default Product;
