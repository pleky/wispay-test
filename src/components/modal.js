import * as React from 'react';
import Modal from 'react-native-modal';
import { View, StyleSheet } from 'react-native';
import { CustomText } from 'components';
import {
  COLOR_WHITE,
  DIVIDER_COLOR,
  SECONDARY_COLOR,
} from 'utils/constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from './container';

const ModalComponent = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection={['up', 'left', 'right', 'down']}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      animationInTiming={100}
      animationIn="fadeInUp"
      style={styles.modal}>
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Container mr={20}>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={20}
              color={SECONDARY_COLOR}
            />
          </Container>
          <CustomText fontWeight="bold">Ubah</CustomText>
        </View>
        <View style={styles.textWrapper}>
          <Container mr={20}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={20}
              color={SECONDARY_COLOR}
            />
          </Container>
          <CustomText fontWeight="bold">Hapus</CustomText>
        </View>
        <View style={styles.textWrapper}>
          <Container mr={20}>
            <MaterialCommunityIcons
              name="tag-outline"
              size={20}
              color={SECONDARY_COLOR}
            />
          </Container>
          <CustomText fontWeight="bold">Tandai Terjual</CustomText>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: DIVIDER_COLOR,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  contentWrapper: {
    backgroundColor: COLOR_WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default ModalComponent;
