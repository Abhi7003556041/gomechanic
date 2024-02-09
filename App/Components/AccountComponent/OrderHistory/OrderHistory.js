import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Container} from 'react-native-basic-elements';
import BackHeader from '../../Header/BackHeader';
import {FONTS} from '../../../Constants/Fonts';
import {moderateScale} from '../../../Constants/PixelRatio';
import LinearGradient from 'react-native-linear-gradient';

const OrderHistory = () => {
  return (
    <>
      <Container style={{}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(15),
          }}>
          <BackHeader title="Order History" />
          <Text style={{fontFamily: FONTS.medium, color: 'red'}}>Help</Text>
        </View>

        <Image
          style={{...styles.clickbord_image}}
          source={require('../../../Assets/images/clickbord.jpg')}
        />
        <View style={{padding: moderateScale(15)}}>
          <Text
            style={{
              fontFamily: FONTS.bold,
              color: '#000',
              fontSize: moderateScale(20),
            }}>
            Sorry,
          </Text>
          <Text style={{fontFamily: FONTS.regular}}>
            It seems like you don't have ongoing/completed order.
          </Text>
        </View>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ff3a01', '#fc5a4b', '#ff0075']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>BOOK A SERVICE</Text>
        </LinearGradient>
      </Container>
    </>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  clickbord_image: {
    width: '100%',
    height: moderateScale(150),
  },
  linearGradient: {
    borderRadius: moderateScale(5),
    height: moderateScale(40),
    marginHorizontal: moderateScale(10),
  },
  buttonText: {
    fontSize: moderateScale(13),
    fontFamily: FONTS.medium,
    textAlign: 'center',
    margin: moderateScale(10),
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
