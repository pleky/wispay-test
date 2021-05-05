import { Container, CustomIcon, CustomText, Row } from 'components';
import * as React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import Ioicons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {
  BACKGROUD_COLOR,
  COLOR_WHITE,
  DIVIDER_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from 'utils/constants/colors';
import { detailData } from 'utils/datas/detailData';

const ListingInfo = () => {
  return (
    <View>
      <FlatList
        data={detailData.facilities}
        style={{ backgroundColor: COLOR_WHITE }}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
        ListFooterComponent={() => (
          <View>
            <Container padding={10} bgColor={COLOR_WHITE}>
              <Container
                borderTopColor={DIVIDER_COLOR}
                borderTopWidth={1}
                padding={10}>
                <Row alignItems="center">
                  <Image
                    source={require('assets/icons/badge.png')}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                    resizeMethod="scale"
                    resizeMode="contain"
                  />
                  <CustomText variant="body2">Sertifikat Hak Milik</CustomText>
                </Row>
              </Container>
              <Container
                borderTopColor={DIVIDER_COLOR}
                borderTopWidth={1}
                padding={10}>
                <Row alignItems="center">
                  <Ioicons
                    name="time-outline"
                    size={20}
                    style={{ marginRight: 10 }}
                  />
                  <CustomText variant="body2">
                    Diposting pada: 24-Dec-2019
                  </CustomText>
                </Row>
              </Container>
            </Container>

            <View style={styles.divider} />

            <Container bgColor={COLOR_WHITE} padding={10} pt={20} pb={20}>
              <Row alignItems="center">
                <Ioicons
                  name="lock-closed"
                  size={20}
                  style={{ marginRight: 10 }}
                />
                <CustomText fontWeight="bold">Catatan Internal</CustomText>
              </Row>
              <Container mt={10} mb={10}>
                <CustomText variant="body2" color={PRIMARY_COLOR}>
                  Hanya akan dilihat oleh Marketing satu perusahaan.
                </CustomText>
              </Container>
              <View>
                <Text>Alamat Details:</Text>
                <Text>NavaPark Cluster Moonlight Blok 38D No. 55</Text>
              </View>
            </Container>

            <View style={styles.divider} />

            <Container bgColor={COLOR_WHITE} padding={10} pt={20} pb={20}>
              <Row alignItems="center">
                <Ioicons
                  name="lock-closed"
                  size={20}
                  style={{ marginRight: 10 }}
                />
                <CustomText fontWeight="bold">Owner Property</CustomText>
              </Row>
              <Container mt={10} mb={10}>
                <CustomText variant="body2" color={PRIMARY_COLOR}>
                  Hanya anda yang dapat melihat informasi ini.
                </CustomText>
              </Container>
              <View>
                <Row>
                  <CustomText>Nama: </CustomText>
                  <CustomText fontWeight="bold">Jois Aprillio</CustomText>
                </Row>
                <Row>
                  <CustomText>No. HP: </CustomText>
                  <CustomText fontWeight="bold">081388809999</CustomText>
                </Row>
              </View>
              <Container mt={20}>
                <Row justifyContent="space-around">
                  <TouchableWithoutFeedback>
                    <View style={styles.buttonRounded}>
                      <Row alignItems="center">
                        <FeatherIcons
                          name="phone-call"
                          size={15}
                          style={{ marginRight: 10 }}
                        />
                        <CustomText>Telepon</CustomText>
                      </Row>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback>
                    <View style={styles.buttonRounded}>
                      <Row alignItems="center">
                        <Ioicons
                          name="ios-chatbubble-outline"
                          size={17}
                          style={{ marginRight: 10 }}
                        />
                        <CustomText>Whatsapp</CustomText>
                      </Row>
                    </View>
                  </TouchableWithoutFeedback>
                </Row>
              </Container>
            </Container>
          </View>
        )}
        renderItem={({ item }) => (
          <Row flex={1} alignItems="center">
            <Container padding={10}>
              <View style={styles.iconWrapper}>
                <CustomIcon iconId={item.iconId} />
              </View>
            </Container>
            <View>
              <CustomText>{item.name}</CustomText>
              <CustomText fontWeight="bold">
                {item.desc}
                <CustomText variant="subtitle1" fontWeight="bold">
                  {item.measure_unit}
                </CustomText>
              </CustomText>
            </View>
          </Row>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 15,
    width: '100%',
    backgroundColor: DIVIDER_COLOR,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    backgroundColor: COLOR_WHITE,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: DIVIDER_COLOR,
  },
  buttonRounded: {
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#E0E0E0',
  },
});

export default ListingInfo;
