import React from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Page from '../components/Page';
import Row from '../components/Row';
import Text from '../components/Text';
import images from '../res/images';

function User() {
  return (
    <>
      <Header />

      <Page>
        <Row variant="shadow">
          <div>
            <Row>
              <img className="icon" src={images.image.user} alt="" />
              <Text size="small">Marshal</Text>
            </Row>
            <Row>
              <img className="icon" src={images.image.email} alt="" />
              <Text size="small">Email@domain.com</Text>
            </Row>
            <Row>
              <img className="icon" src={images.image.calendar} alt="" />
              <Text size="small">1300 / 33 / 33</Text>
            </Row>
            <Row>
              <img className="icon" src={images.image.location} alt="" />
              <Text size="small">Your moms home</Text>
            </Row>
          </div>

          <div className="add-user-credit">
            <Text size="xlarge">$ 10000000</Text>
            <Button text="add to card" variant="skeleton" />
            <Button text="add more credit" variant="control" />
          </div>
        </Row>
      </Page>
      <Footer />
    </>
  );
}

export default User;
