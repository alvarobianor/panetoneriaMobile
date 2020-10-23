import styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';

export const Container = styled.View`
  padding: 20px;
  align-items: center;
`;

export const PickerSelection = styled(Picker)`
  color: white;
  width: 100%;
  font-family: 'Roboto-Medium';
`;

export const PickerMolder = styled.View`
  width: 60%;
  margin-top: 4px;
  background-color: #e07a16;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  align-self: center;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 50px;
  text-align: center;
`;

export const Repository = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 20px;
  height: 150px;
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  align-items: center;
  flex-direction: row;
`;

export const Card = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;
export const CardInfo = styled.View`
  flex: 1;
  height: 100%;
  margin-left: 10px;
`;

export const CardInfoTitle = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 30px;
`;

export const CardInfoBrand = styled.Text`
  margin-top: 10px;
  font-family: 'Roboto-Regular';
  font-size: 20px;
`;
