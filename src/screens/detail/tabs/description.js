import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR_WHITE, DIVIDER_COLOR } from 'utils/constants/colors';

const Description = () => {
  return (
    <View style={styles.contaner}>
      <Text>Descriptions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contaner: { backgroundColor: COLOR_WHITE, flex: 1, padding: 10 },
});

export default Description;
