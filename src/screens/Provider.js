import React from 'react';
import Page from '../components/Page';
import Header from '../components/Header';
import Suggestions from '../components/Suggestions';
import Footer from '../components/Footer';
import images from '../res/images';
import Text from '../components/Text';

function Provider() {
  return (
    <>
      <Header />

      <Page>
        <div className="provider">
          <img className="provider__img" src={images.image.provider} alt="provider" />
          <Text size="small" className="provider__since">
            since 1990
          </Text>
          <Text size="xlarge">Huawei</Text>
        </div>
        <Suggestions title="All provided commoditites" />
      </Page>

      <Footer />
    </>
  );
}

export default Provider;
