/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, ScrollView} from 'react-native';
import Logo from '../../assets/background-toast.png';
import BackgroundRepo from '../../assets/logo.png';

import api from '../../service/api';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  PickerSelection,
  PickerMolder,
  Title,
  Repository,
  Card,
  CardInfo,
  CardInfoTitle,
  CardInfoBrand,
} from './styles';

interface Brands {
  brands: Array<string>;
}

interface Panettone {
  _id: string;
  name: string;
  brand: string;
  url_img: string;
  id: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigation();

  const [selectedValue, setSelectedValue] = useState('nenhum');
  const [listBrands, setListBrands] = useState<string[]>([]);
  const [data, setData] = useState<Panettone[]>([]);

  useEffect(() => {
    async function load() {
      const {data: info} = await api.get<Brands>('/brands');
      setListBrands(info.brands);
    }
    load();
  }, []);

  useEffect(() => {
    async function load() {
      const {data: info} = await api.get<Panettone[]>(
        `/search?filter=${selectedValue}`,
      );
      setData(info);
      console.log(data);
    }
    load();
  }, [selectedValue]);

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
          <Title>Veja aqui uma lista fantástica de Panettones</Title>
          <Text style={{marginTop: 40}}>Filtro por marca:</Text>

          <PickerMolder>
            <PickerSelection
              selectedValue={selectedValue}
              onValueChange={(value, position) =>
                setSelectedValue(String(value))
              }>
              <PickerSelection.Item label="Nenhum" value="nenhum" />
              {listBrands.map((element) => (
                <PickerSelection.Item
                  key={element}
                  label={element}
                  value={element}
                />
              ))}
            </PickerSelection>
          </PickerMolder>
          {data.map((element) => (
            <Repository
              key={element.id}
              onPress={() =>
                navigate.navigate('Details', {
                  title: element.name,
                })
              }>
              <Card source={{uri: element.url_img}} />
              <CardInfo>
                <CardInfoTitle>{element.name}</CardInfoTitle>
                <CardInfoBrand>{element.brand}</CardInfoBrand>
              </CardInfo>
            </Repository>
          ))}
        </Container>
      </ScrollView>
    </ImageBackground>
  );
};

export default Dashboard;
