import * as React from 'react';
import styled from 'styled-components/native';
import { PRIMARY_COLOR } from 'utils/constants/colors';
import logo from 'assets/owner.png';

const AvatarContainer = styled.View`
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border: solid 1px ${PRIMARY_COLOR};
  border-radius: 100px;
  padding: 3px;
`;

const AvatarImage = styled.Image`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${64 / 2}px;
`;

const Avatar = ({ url = logo, size }) => {
  return (
    <AvatarContainer>
      <AvatarImage source={url} size={size} />
    </AvatarContainer>
  );
};

export default Avatar;
