import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Container, Icon } from 'react-native-basic-elements';
import { moderateScale } from '../../../Constants/PixelRatio';
import BackHeader from '../../Header/BackHeader';
import { FONTS } from '../../../Constants/Fonts';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../../../Services/Navigation';

const GoMechActivation = () => {
  return (
    <Container style={{ ...styles.MainContainer }}>
      <BackHeader title="Activate GoConnect" />
      <Text style={{ ...styles.header_text }}>GoMechanic Activation</Text>
      <TouchableOpacity
        onPress={() => NavigationService.navigate('SmartDeviceSmaterCar')}>
        <View style={{ ...styles.containt }}>
          <View style={{ ...styles.containt_view1 }}>
            <Image
              source={require('../../../Assets/images/activation1.jpg')}
              style={{ ...styles.containt_image }}
            />
          </View>
          <View style={{ ...styles.containt_view2 }}>
            <View>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: moderateScale(15),
                  color: '#000',
                }}>
                Don't have GoConnect?
              </Text>
              <Text style={{ fontFamily: FONTS.medium }}>
                Buy Now to make your Car Smarter
              </Text>
            </View>
            <View
              style={{
                borderWidth: moderateScale(0.3),
                borderRadius: moderateScale(5),
              }}>
              <Icon
                name="arrowright"
                type="AntDesign"
                color="red"
                style={{ padding: moderateScale(6) }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={{ ...styles.header_text }}>DIY Activation</Text>
      <View style={{ ...styles.containt }}>

        <TouchableOpacity
          onPress={() => NavigationService.navigate('OBDActivation')}
        >
          <View style={{ ...styles.containt_view1 }}>
            <Image
              source={require('../../../Assets/images/activation2.jpg')}
              style={{ ...styles.containt_image }}
            // resizeMode='contain'
            />
          </View>


          <View style={{ ...styles.containt_view2 }}>
            <View>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: moderateScale(15),
                  color: '#000',
                }}>
                Got GoConnect Delivery?
              </Text>
              <Text style={{ fontFamily: FONTS.medium }}>
                Learn how to activate it
              </Text>
            </View>
            <View
              style={{
                borderWidth: moderateScale(0.2),
                borderRadius: moderateScale(2),
              }}>
              <Icon
                name="arrowright"
                type="AntDesign"
                color="red"
                style={{ padding: moderateScale(6) }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default GoMechActivation;

const styles = StyleSheet.create({
  MainContainer: {
    paddingHorizontal: moderateScale(10),
  },
  header_text: {
    fontFamily: FONTS.bold,
    color: '#000',
    fontSize: moderateScale(15),
  },
  containt: {
    // borderWidth: moderateScale(1),
    // paddingHorizontal:moderateScale(15),
    paddingVertical: moderateScale(10),
  },
  containt_view1: {
    height: moderateScale(100),
    borderWidth: moderateScale(0.2),
    borderBottomLeftRadius: moderateScale(0),
    borderBottomRightRadius: moderateScale(0),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
  containt_view2: {
    height: moderateScale(70),
    borderWidth: moderateScale(0.2),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(0),
    borderTopRightRadius: moderateScale(0),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(15),
  },
  containt_image: {
    height: moderateScale(100),
    width: '100%',
    borderBottomLeftRadius: moderateScale(0),
    borderBottomRightRadius: moderateScale(0),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    resizeMode: 'stretch',
  },
});
