import styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';

export const Container = styled.View`
  padding: 20px;
`;

export const PickerI = styled(Picker)`
  color: white;
  width: 100%;
  font-family: 'Roboto-Medium';
`;

export const PickerMolder = styled.View`
  width: 60%;
  margin-top: 60px;
  background-color: #e07a16;
  /* border-width: 1px; */
  border-radius: 50px;
  padding: 10px;
  text-align: center;
  align-self: center;
`;
