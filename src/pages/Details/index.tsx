/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import Logo from '../../assets/background-toast.png';
import BackgroundAvatar from '../../assets/logo.png';

import {
  Container,
  Header,
  ListMolder,
  BlockInfo,
  About,
  Avatar,
  HeaderTitle,
  ListTitle,
  ListDetail,
  AboutTitle,
  AboutDetail,
} from './styles';

const Details: React.FC = () => {
  return (
    <ImageBackground
      source={Logo}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}>
      <ScrollView>
        <Container>
          <Header>
            <Avatar source={BackgroundAvatar} />
            <HeaderTitle> Title foda </HeaderTitle>
          </Header>

          <ListMolder>
            <BlockInfo>
              <ListTitle>Garoto</ListTitle>
              <ListDetail>Marca</ListDetail>
            </BlockInfo>

            <BlockInfo>
              <ListTitle>R$500</ListTitle>
              <ListDetail>Preço</ListDetail>
            </BlockInfo>

            <BlockInfo>
              <ListTitle>2Kg</ListTitle>
              <ListDetail>Peso</ListDetail>
            </BlockInfo>
          </ListMolder>

          <About>
            <AboutTitle>Olá fion</AboutTitle>
            <AboutDetail>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </AboutDetail>
          </About>
        </Container>
      </ScrollView>
    </ImageBackground>
  );
};

export default Details;
