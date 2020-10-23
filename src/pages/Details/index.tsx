/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import Logo from '../../assets/background-toast.png';
import BackgroundAvatar from '../../assets/logo.png';
import api from '../../service/api';

import {RouteProp, useRoute} from '@react-navigation/native';

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
  name: string;
}

interface Info {
  brand: string;
  weight: number;
  price: number;
  about: string;
  url_img: string;
}
const Details: React.FC = () => {
  const {params} = useRoute<RouteProp<Record<string, Params>, string>>();
  const {name} = params;

  const [panettone, setPanettone] = useState<Info>();

  useEffect(() => {
    async function load() {
      const {data: info} = await api.get<Info>(`/panettone/${name}`);
      setPanettone(info);
    }
    load();
  }, []);

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
            <Avatar source={{uri: panettone?.url_img} || BackgroundAvatar} />
            <HeaderTitle> {name} </HeaderTitle>
          </Header>

          <ListMolder>
            <BlockInfo>
              <ListTitle>{panettone?.brand || 'Mock'}</ListTitle>
              <ListDetail>Marca</ListDetail>
            </BlockInfo>

            <BlockInfo>
              <ListTitle>R${panettone?.price || 'Mock'}</ListTitle>
              <ListDetail>Preço</ListDetail>
            </BlockInfo>

            <BlockInfo>
              <ListTitle>{panettone?.weight || 'Mock'}Kg</ListTitle>
              <ListDetail>Peso</ListDetail>
            </BlockInfo>
          </ListMolder>

          <About>
            <AboutTitle>Uma breve história sobre esse Panettone</AboutTitle>
            <AboutDetail>{panettone?.about || 'Mock'}</AboutDetail>
          </About>
        </Container>
      </ScrollView>
    </ImageBackground>
  );
};

export default Details;
