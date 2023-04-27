import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Suggestions from '../components/Suggestions';
import Footer from '../components/Footer';
import Text from '../components/Text';
import { provider as mockProvider } from '../mock/commodities';

function Provider() {
  const provider = mockProvider;

  return (
    <>
      <Header />

      <Page>
        <div className="provider">
          <img className="provider__img" src={provider.pic} alt="provider" />
          <Text size="small" className="provider__since">
            since {provider.since}
          </Text>
          <Text size="xlarge">{provider.title}</Text>
        </div>
        <Suggestions title="All provided commoditites" products={provider.commodities} />
      </Page>

      <Footer />
    </>
  );
}

export default Provider;
