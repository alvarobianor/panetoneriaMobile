/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ImageBackground, Text, ScrollView} from 'react-native';
import Logo from '../../assets/background-toast.png';
import BackgroundRepo from '../../assets/logo.png';

import {
  Container,
  PickerSelection,
  PickerMolder,
  Title,
  Repository,
  Card,
  CardInfo,
  CardInfoTitle,
  CardInfoDescription,
} from './styles';

const Dashboard: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('java');
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
              <PickerSelection.Item label="Java" value="java" />
              <PickerSelection.Item label="React" value="React" />
              <PickerSelection.Item label="React-Native" value="React-Native" />
              <PickerSelection.Item label="Node" value="Node" />
            </PickerSelection>
          </PickerMolder>

          <Repository>
            <Card source={BackgroundRepo} />
            <CardInfo>
              <CardInfoTitle>Title de merda</CardInfoTitle>
              <CardInfoDescription>
                Outra merda de description
              </CardInfoDescription>
            </CardInfo>
          </Repository>
          <Repository>
            <Card source={BackgroundRepo} />
            <CardInfo>
              <CardInfoTitle>Title de merda</CardInfoTitle>
              <CardInfoDescription>
                Outra merda de description
              </CardInfoDescription>
            </CardInfo>
          </Repository>
          <Repository>
            <Card source={BackgroundRepo} />
            <CardInfo>
              <CardInfoTitle>Title de merda</CardInfoTitle>
              <CardInfoDescription>
                Outra merda de description
              </CardInfoDescription>
            </CardInfo>
          </Repository>
          <Repository>
            <Card source={BackgroundRepo} />
            <CardInfo>
              <CardInfoTitle>Title de merda</CardInfoTitle>
              <CardInfoDescription>
                Outra merda de description
              </CardInfoDescription>
            </CardInfo>
          </Repository>
          <Repository>
            <Card source={BackgroundRepo} />
            <CardInfo>
              <CardInfoTitle>Title de merda</CardInfoTitle>
              <CardInfoDescription>
                Outra merda de description
              </CardInfoDescription>
            </CardInfo>
          </Repository>
          <Repository>
            <Card source={BackgroundRepo} />
            <CardInfo>
              <CardInfoTitle>Title de merda</CardInfoTitle>
              <CardInfoDescription>
                Outra merda de description
              </CardInfoDescription>
            </CardInfo>
          </Repository>
          <Repository>
            <Card source={BackgroundRepo} />
            <CardInfo>
              <CardInfoTitle>Title de merda</CardInfoTitle>
              <CardInfoDescription>
                Outra merda de description
              </CardInfoDescription>
            </CardInfo>
          </Repository>
          <Repository>
            <Card source={BackgroundRepo} />
            <CardInfo>
              <CardInfoTitle>Title de merda</CardInfoTitle>
              <CardInfoDescription>
                Outra merda de description
              </CardInfoDescription>
            </CardInfo>
          </Repository>
        </Container>
      </ScrollView>
    </ImageBackground>
  );
};

export default Dashboard;
