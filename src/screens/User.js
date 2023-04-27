import React from 'react';
import Button from '../components/Button';
import Column from '../components/Column';
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
        <Row className="user-info" variant="shadow" justifyContent="space-between">
          <Column>
            <Row>
              <img className="icon" src={images.image.user} alt="" />
              <Text size="large">Marshal</Text>
            </Row>
            <Row>
              <img className="icon" src={images.image.email} alt="" />
              <Text size="large">Email@domain.com</Text>
            </Row>
            <Row>
              <img className="icon" src={images.image.calendar} alt="" />
              <Text size="large">1300 / 33 / 33</Text>
            </Row>
            <Row>
              <img className="icon" src={images.image.location} alt="" />
              <Text size="large">Your moms home</Text>
            </Row>
          </Column>

          <Column alignItems="center">
            <Text size="xlarge">$ 10000000</Text>
            <Button width="fill" text="add to card" variant="skeleton" />
            <Button width="fill" text="add more credit" variant="control" />
          </Column>
        </Row>
      </Page>
      <Footer />
    </>
  );
}

export default User;
