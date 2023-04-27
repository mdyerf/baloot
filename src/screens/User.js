import React from 'react';
import Button from '../components/Button';
import Column from '../components/Column';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Page from '../components/Page';
import Row from '../components/Row';
import Text from '../components/Text';
import images from '../res/images';
import { user as mockUser } from '../mock/commodities';
import List from '../components/List';

function User() {
  const user = mockUser;

  const handleChangeCount = (id, value) => {
    console.log(`change count of ${id} to ${value}`);
  };

  return (
    <>
      <Header />

      <Page>
        <Row className="user-info" variant="shadow" justifyContent="space-between">
          <Column>
            <Row>
              <img className="icon" src={images.image.user} alt="" />
              <Text size="large">{user.username}</Text>
            </Row>
            <Row>
              <img className="icon" src={images.image.email} alt="" />
              <Text size="large">{user.email}</Text>
            </Row>
            <Row>
              <img className="icon" src={images.image.calendar} alt="" />
              <Text size="large">{user.birthDate}</Text>
            </Row>
            <Row>
              <img className="icon" src={images.image.location} alt="" />
              <Text size="large">{user.address}</Text>
            </Row>
          </Column>

          <Column alignItems="center">
            <Text size="xlarge">${user.credit}</Text>
            <Button width="fill" text="add to card" variant="skeleton" />
            <Button width="fill" text="add more credit" variant="control" />
          </Column>
        </Row>

        <List
          icon={images.image.cart}
          title="Cart"
          products={user.cart}
          editable
          onItemCountChange={handleChangeCount}
        />
        <Button text="Pay now!" variant="control" width="half" />
        <List icon={images.image.history} title="history" products={user.history} editable={false} />
      </Page>
      <Footer />
    </>
  );
}

export default User;
