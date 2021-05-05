import * as React from 'react';
import styled from 'styled-components/native';
import { COLOR_WHITE } from 'utils/constants/colors';
import Avatar from './avatar';
import logo from 'assets/owner.png';
import CustomText from './customText';

const HeaderContainer = styled.View`
  background-color: ${COLOR_WHITE};
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  margin-bottom: 5px;
`;

const HeaderAvatar = () => {
  return (
    <HeaderContainer>
      <Container>
        <Avatar url={logo} size={70} />
      </Container>
      <CustomText variant="body1" fontWeight="bold">
        Henry Scott
      </CustomText>
      <CustomText variant="body2" fontWeight="light">
        Member Broker Century 21 BSD City
      </CustomText>
    </HeaderContainer>
  );
};

export default HeaderAvatar;
