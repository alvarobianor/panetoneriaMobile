import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  align-items: center;
`;
export const Header = styled.View`
  margin-top: 40px;
`;

export const Avatar = styled.Image`
  width: 220px;
  height: 220px;
  border-radius: 100px;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 45px;
  text-align: center;
  margin-top: 20px;
`;

export const ListMolder = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;
`;

export const BlockInfo = styled.View`
  /* container */
`;

export const ListTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 30px;
`;

export const ListDetail = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 20px;
  align-self: flex-end;
`;

export const About = styled.View`
  margin-top: 50px;
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
  padding: 20px;
`;

export const AboutTitle = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 30px;
  margin-bottom: 40px;
`;

export const AboutDetail = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 20px;
  text-align: justify;
`;
