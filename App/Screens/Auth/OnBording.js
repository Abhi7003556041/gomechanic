import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import {
  AppButton,
  Container,
  StatusBar,
  Text,
  useTheme,
} from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import Swiper from 'react-native-swiper';
import NavigationService from '../../Services/Navigation';

const { height, width } = Dimensions.get('screen');

const OnBording = () => {
  const colors = useTheme();
  console.log(colors)
  return (
    <Container>
      <StatusBar
        backgroundColor={colors.pageBackgroundColor}
        barStyle="dark-content"
      />
      {/* <View style={{flex:1}}/> */}
      <View
        style={{
          height: height / 1.4,
        }}>
        <Swiper>
          {[1, 2, 3, 4].map((item, index) => (
            <View>
              <Image
                style={styles.imageView}
                source={{
                  uri: 'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
                resizeMode="contain"
              />
              <Text style={styles.textStyle}>
                Say Goodbye To Your Car Troubles!
              </Text>
              <Text
                style={{
                  ...styles.textSubStyle,
                  color: colors.secondaryFontColor,
                }}>
                100+ Services Repair & Products
              </Text>
            </View>
          ))}
        </Swiper>
      </View>
      <View style={{ flex: 1 }} />
      <AppButton
        style={styles.button}
        title="SELECT YOUR CAR"
        textStyle={{ ...styles.buttonTextStyle, color:"#fff" }}
        onPress={() => NavigationService.navigate('CarSelect')}
      />
      <Text style={styles.accountText}>
        Already have an account? <Text style={{ ...styles.accountText, color: colors.buttonColor , fontFamily:FONTS.semibold}}
          onPress={() => NavigationService.navigate("Login")}
        > Login</Text>
      </Text>
    </Container>
  );
};

export default OnBording;

const styles = StyleSheet.create({
  imageView: {
    height: moderateScale(400),
  },
  textStyle: {
    fontFamily: FONTS.bold,
    fontSize: moderateScale(18),
    textAlign: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  textSubStyle: {
    fontFamily: FONTS.regular,
    fontSize: moderateScale(13),
    textAlign: 'center',
    marginTop: moderateScale(10),
  },
  button: {
    borderRadius: 0,
    elevation: 5,
    height: moderateScale(39),
  },
  buttonTextStyle: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(12),
  },
  accountText: {
    fontFamily: FONTS.regular,
    textAlign: 'center',
    fontSize: moderateScale(13),
    marginVertical: moderateScale(20)
  },
});
