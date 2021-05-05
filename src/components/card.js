import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  COLOR_BLACK,
  COLOR_WHITE,
  DIVIDER_COLOR,
  SECONDARY_COLOR,
} from 'utils/constants/colors';
import Avatar from './avatar';
import CustomText from './customText';
import CustomIcon from './customIcon';
import Icon from 'react-native-vector-icons/Feather';
import Ioicons from 'react-native-vector-icons/Ionicons';

import content1 from 'assets/contents/content1.png';
import Label from './label';
import { propertyType } from 'utils/constants/statuses';
import { Container, Row } from 'components';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

const Card = styled.View`
  background-color: ${COLOR_WHITE};
  border-radius: 15px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  elevation: 5;
  shadow-opacity: 0.5;
  overflow: hidden;
`;

const CardHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

const Column = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const CardBody = styled.View`
  background-color: ${COLOR_WHITE};
`;

const CardImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const HorizontalDivider = styled.View`
  height: 1px;
  width: 100%;
  margin-top: 5px;
  background-color: ${DIVIDER_COLOR};
`;

const VerticalDivider = styled.View`
  height: 90%;
  width: 1px;
  margin-top: 5px;
  background-color: ${DIVIDER_COLOR};
`;

const FlexBox = styled.View`
  flex: ${({ flex }) => flex ?? 1};
  padding: ${({ padding }) => padding ?? 0}px;
  margin: ${({ margin }) => margin ?? 0}px;
  margin-left: ${({ ml }) => ml ?? 0}px;
  margin-right: ${({ mr }) => mr ?? 0}px;
  margin-top: ${({ mt }) => mt ?? 0}px;
  margin-bottom: ${({ mb }) => mb ?? 0}px;
  padding-left: ${({ pl }) => pl ?? 0}px;
  padding-right: ${({ pr }) => pr ?? 0}px;
  padding-top: ${({ pt }) => pt ?? 0}px;
  padding-bottom: ${({ pb }) => pb ?? 0}px;
`;

const Chip = styled.View`
  background-color: ${COLOR_BLACK};
  padding: 2px 10px;
  border-radius: 15px;
`;

const CustomCard = props => {
  const {
    owner,
    company,
    name,
    price,
    propertyTypeId,
    isPrivate,
    facilities,
    address,
    saleType,
    onClickMore,
  } = props;

  return (
    <Card>
      <CardHeader>
        <Row>
          <Avatar size={40} />
          <Column justifyContent="center" alignItems="center">
            <Container ml={10}>
              <CustomText fontWeight="bold" variant="heading2">
                {owner}
              </CustomText>
              <CustomText fontWeight="lighter" variant="body2">
                {company}
              </CustomText>
            </Container>
          </Column>
        </Row>
        <TouchableWithoutFeedback onPress={onClickMore}>
          <Container>
            <Icon name="more-vertical" size={20} />
          </Container>
        </TouchableWithoutFeedback>
      </CardHeader>

      <CardBody>
        <CardImage source={content1} />
        <Container pl={10} pt={5} pr={10} pb={10}>
          <Row justifyContent="space-between">
            <Container mb={5}>
              <CustomText variant="body2" fontWeight="normal">
                {name}
              </CustomText>
            </Container>
            <Container>
              {isPrivate ? (
                <Chip>
                  <CustomText variant="body2" color={COLOR_WHITE}>
                    Private
                  </CustomText>
                </Chip>
              ) : null}
            </Container>
          </Row>
          <CustomText variant="heading1" fontWeight="bold">
            Rp {price}
          </CustomText>

          <Row alignItems="center">
            <CustomText variant="body2" fontWeight="bold">
              {propertyType[propertyTypeId]}
            </CustomText>
            <Container ml={10}>
              <Label status={saleType} />
            </Container>
          </Row>

          <Container mt={5}>
            <Row>
              <Ioicons
                name="location-outline"
                color={SECONDARY_COLOR}
                size={10}
              />
              <CustomText variant="subtitle2" color={SECONDARY_COLOR}>
                {address}
              </CustomText>
            </Row>
          </Container>

          <HorizontalDivider />

          <Row>
            {facilities.map((item, idx) => (
              <FlexBox pl={10} pt={10} key={idx}>
                <Row flexDirection="row" alignItems="center">
                  <CustomIcon iconId={item.id} />
                  <Container ml={10}>
                    <Row alignItems="baseline">
                      <CustomText fontWeight="bold">
                        {item.desc}
                        <CustomText variant="subtitle2" fontWeight="bold">
                          {item.measure_unit}
                        </CustomText>
                      </CustomText>
                    </Row>
                  </Container>
                </Row>
                <CustomText variant="subtitle1" color={SECONDARY_COLOR}>
                  {item.name}
                </CustomText>
              </FlexBox>
            ))}
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
};

CustomCard.propTypes = {
  owner: PropTypes.string,
  price: PropTypes.string,
  company: PropTypes.string,
  propertyTypeId: PropTypes.number,
  facilities: PropTypes.array,
  name: PropTypes.string,
  address: PropTypes.string,
  isPrivate: PropTypes.bool,
};
export default CustomCard;
