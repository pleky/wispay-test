import * as React from 'react';
import { ListScreen, DetailScreen } from 'screens';
import Ioicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import { CustomText } from 'components';

const rootNavigator = [
  {
    name: 'List',
    component: ListScreen,
    options: { headerTitle: props => <Ioicons name="arrow-back" size={20} /> },
  },
  {
    name: 'Detail',
    component: DetailScreen,
    options: {
      headerTitle: props => (
        <View style={style.header}>
          <CustomText fontWeight="bold">Detail Listing #80889</CustomText>
          <Ioicons name="heart-outline" size={20} />
        </View>
      ),
    },
  },
];

const style = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default rootNavigator;
