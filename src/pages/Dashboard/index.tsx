/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ImageBackground, Text} from 'react-native';
import Logo from '../../assets/background-toast.png';

import {Container, PickerI, PickerMolder} from './styles';

import {PickerProps} from 'react-native';

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
      <Container>
        <PickerMolder>
          <PickerI
            selectedValue={selectedValue}
            onValueChange={(value, position) =>
              setSelectedValue(String(value))
            }>
            <PickerI.Item label="Java" value="java" />
            <PickerI.Item label="React" value="React" />
            <PickerI.Item label="React-Native" value="React-Native" />
            <PickerI.Item label="Node" value="Node" />
          </PickerI>
        </PickerMolder>
      </Container>
    </ImageBackground>
  );
};

export default Dashboard;
