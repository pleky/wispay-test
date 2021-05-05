import {
  Card,
  Container,
  CustomBackdrop,
  CustomText,
  HeaderAvatar,
  ModalComponent,
} from 'components';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, TouchableWithoutFeedback, Text, FlatList } from 'react-native';
import {
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_WHITE,
  DIVIDER_COLOR,
  PRIMARY_COLOR,
} from 'utils/constants/colors';
import { listingData, favData, archiveData } from 'utils/datas/listData';

const Tab = createMaterialTopTabNavigator();

const timeStamp = new Date().getTime();

const List = ({ navigation }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <>
      <FlatList
        contentContainerStyle={{ padding: 10 }}
        keyExtractor={item => item.id + timeStamp}
        data={listingData}
        renderItem={({ item }) => (
          <Container mb={10}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Detail')}>
              <View
                onStartShouldSetResponder={event => true}
                onTouchEnd={e => {
                  e.stopPropagation();
                }}>
                <Card
                  propertyTypeId={item.propertyType}
                  owner={item.owner}
                  name={item.name}
                  company={item.company}
                  facilities={item.highlight_facilities}
                  price={item.price}
                  isPrivate={item.is_private}
                  address={item.address}
                  saleType={item.sale_status}
                  onClickMore={() => setIsVisible(true)}
                />
              </View>
            </TouchableWithoutFeedback>
          </Container>
        )}
      />

      <ModalComponent
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </>
  );
};
const Fav = () => (
  <FlatList
    contentContainerStyle={{ padding: 10 }}
    keyExtractor={item => item.id + timeStamp}
    data={favData}
    renderItem={({ item }) => (
      <Container mb={10}>
        <Card
          propertyTypeId={item.propertyType}
          owner={item.owner}
          name={item.name}
          company={item.company}
          facilities={item.highlight_facilities}
          price={item.price}
          isPrivate={item.is_private}
          address={item.address}
          saleType={item.sale_status}
        />
      </Container>
    )}
  />
);
const Archive = () => (
  <FlatList
    contentContainerStyle={{ padding: 10 }}
    keyExtractor={item => item.id + timeStamp}
    data={archiveData}
    renderItem={({ item }) => (
      <Container mb={10}>
        <Card
          propertyTypeId={item.propertyType}
          owner={item.owner}
          name={item.name}
          company={item.company}
          facilities={item.highlight_facilities}
          price={item.price}
          isPrivate={item.is_private}
          address={item.address}
          saleType={item.sale_status}
        />
      </Container>
    )}
  />
);

const tabBarOptions = {
  activeTintColor: PRIMARY_COLOR,
  inactiveTintColor: COLOR_BLACK,
  indicatorStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
};

const ListScreen = ({ navigation }) => {
  return (
    <>
      <HeaderAvatar />
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Favorite" component={Fav} />
        <Tab.Screen name="Archive" component={Archive} />
      </Tab.Navigator>
    </>
  );
};

export default ListScreen;
