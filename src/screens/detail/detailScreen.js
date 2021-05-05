import { Container, CustomText, HorizontalDivider } from 'components';
import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import {
  COLOR_BLACK,
  COLOR_GREEN,
  COLOR_WHITE,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from 'utils/constants/colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PushNotification from 'react-native-push-notification';
import Ioicons from 'react-native-vector-icons/Ionicons';
import ListingInfo from './tabs/ListingInfo';
import content1 from 'assets/contents/content1.png';
import Description from './tabs/description';

const Tab = createMaterialTopTabNavigator();
const tabBarOptions = {
  activeTintColor: PRIMARY_COLOR,
  inactiveTintColor: COLOR_BLACK,
  indicatorStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
};

const DetailScreen = ({ route }) => {
  return (
    <>
      <View style={{ height: 200 }}>
        <Image source={content1} />
      </View>
      <Container
        bgColor={COLOR_WHITE}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        padding={10}
        mb={20}>
        <Container mb={10}>
          <CustomText variant="body1">Nava Park BSD City </CustomText>
          <CustomText variant="heading1" fontWeight="bold">
            Rp 6.500.000.000
          </CustomText>
        </Container>

        <HorizontalDivider />

        <Container mt={10}>
          <CustomText variant="body2">Rumah untuk Dijual</CustomText>
          <CustomText color={SECONDARY_COLOR} variant="subtitle1">
            <Ioicons
              name="location-outline"
              color={SECONDARY_COLOR}
              size={10}
            />
            Jl. Edutown Kav III.1, BSD, Tangerang Selatan
          </CustomText>
        </Container>
      </Container>

      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Listing Info" component={ListingInfo} />
        <Tab.Screen name="Description" component={Description} />
      </Tab.Navigator>

      <Container padding={10}>
        <Button
          title="Promosikan"
          color={COLOR_BLACK}
          onPress={() => {
            PushNotification.localNotification({
              title: 'My Notification Title', // (optional)
              message: 'My Notification Message',
            });
          }}
        />
      </Container>
    </>
  );
};

export default DetailScreen;
