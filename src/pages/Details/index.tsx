/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import Logo from '../../assets/background-toast.png';
import BackgroundAvatar from '../../assets/logo.png';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

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

interface Params {
  title: string;
  brand: string;
  weight: number;
  price: number;
}

const Details: React.FC = () => {
  const {params} = useRoute<RouteProp<Record<string, Params>, string>>();
  const {title, brand, weight, price} = params;

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
            <HeaderTitle> {title} </HeaderTitle>
          </Header>

          <ListMolder>
            <BlockInfo>
              <ListTitle>{brand}</ListTitle>
              <ListDetail>Marca</ListDetail>
            </BlockInfo>

            <BlockInfo>
              <ListTitle>R${price}</ListTitle>
              <ListDetail>Preço</ListDetail>
            </BlockInfo>

            <BlockInfo>
              <ListTitle>{weight}Kg</ListTitle>
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
