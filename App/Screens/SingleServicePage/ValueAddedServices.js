import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Container, useTheme} from 'react-native-basic-elements';
import ServicePageHeader from '../../Components/Header/ServicePageHeader';
import {moderateScale} from '../../Constants/PixelRatio';
import {FONTS} from '../../Constants/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Front from '../../Components/ValueAddedServices/Front';
import Rear from '../../Components/ValueAddedServices/Rear';
import Wholebody from '../../Components/ValueAddedServices/Wholebody';
import Left from '../../Components/ValueAddedServices/Left';
import Right from '../../Components/ValueAddedServices/Right';
import KnowYourPaintingService from '../../Components/ValueAddedServices/KnowYourPaintingService';

const ValueAddedServices = () => {
  const colors = useTheme();
  //button State
  const [FrontSide, setFrontSide] = useState(true);
  const [RearSide, setRearSide] = useState(false);
  const [WholeBody, setWholeBody] = useState(false);
  const [LeftSide, setLeftSide] = useState(false);
  const [RightSide, setRightSide] = useState(false);

  return (
    <Container style={{paddingHorizontal: moderateScale(5)}}>
      <StatusBar
        backgroundColor={colors.pageBackgroundColor}
        barStyle="dark-content"
      />
      {/* ------------Header---------- */}
      <ServicePageHeader title="Denting & Painting" />

      {/* ---------------------Component Change Button Start------------------------------------------ */}
      <View style={{...styles.ServiceButton_view_Style}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <TouchableOpacity
            onPress={() => {
              setFrontSide(true);
              setRearSide(false);
              setWholeBody(false);
              setLeftSide(false);
              setRightSide(false);
            }}>
            <View
              style={{
                ...styles.ServiceButton_Style,
                borderColor: FrontSide ? '#1054ee' : '#b8afc7',
                backgroundColor: FrontSide ? '#dae1f1' : '#fff',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: FrontSide ? '#1054ee' : '#b8afc7',
                }}>
                Front Side
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setFrontSide(false);
              setRearSide(true);
              setWholeBody(false);
              setLeftSide(false);
              setRightSide(false);
            }}>
            <View
              style={{
                ...styles.ServiceButton_Style,
                borderColor: RearSide ? '#1054ee' : '#b8afc7',
                backgroundColor: RearSide ? '#dae1f1' : '#fff',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: RearSide ? '#1054ee' : '#b8afc7',
                }}>
                Rear Side
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setFrontSide(false);
              setRearSide(false);
              setWholeBody(true);
              setLeftSide(false);
              setRightSide(false);
            }}>
            <View
              style={{
                ...styles.ServiceButton_Style,
                borderColor: WholeBody ? '#1054ee' : '#b8afc7',
                backgroundColor: WholeBody ? '#dae1f1' : '#fff',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: WholeBody ? '#1054ee' : '#b8afc7',
                }}>
                Whole Body
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setFrontSide(false);
              setRearSide(false);
              setWholeBody(false);
              setLeftSide(true);
              setRightSide(false);
            }}>
            <View
              style={{
                ...styles.ServiceButton_Style,
                borderColor: LeftSide ? '#1054ee' : '#b8afc7',
                backgroundColor: LeftSide ? '#dae1f1' : '#fff',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: LeftSide ? '#1054ee' : '#b8afc7',
                }}>
                Left Side
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setFrontSide(false);
              setRearSide(false);
              setWholeBody(false);
              setLeftSide(false);
              setRightSide(true);
            }}>
            <View
              style={{
                ...styles.ServiceButton_Style,
                borderColor: RightSide ? '#1054ee' : '#b8afc7',
                backgroundColor: RightSide ? '#dae1f1' : '#fff',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: RightSide ? '#1054ee' : '#b8afc7',
                }}>
                Right Side
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* ---------------------Component Change Button End------------------------------------------ */}

      <View
        style={{
          borderWidth: moderateScale(0.6),
          marginVertical: moderateScale(10),
          borderColor: '#eeecf4',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Front />
        <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />

        <Rear />
        <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />

        <Wholebody />
        <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />

        <Left />
        <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />

        <Right />
        <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />
        
        <KnowYourPaintingService/>
      </ScrollView>
    </Container>
  );
};

export default ValueAddedServices;

const styles = StyleSheet.create({
  ServiceButton_view_Style: {
    flexDirection: 'row',
    borderColor: '#1054ee',
  },
  ServiceButton_Style: {
    borderWidth: moderateScale(1),
    padding: moderateScale(7),
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(5),
    // borderColor: "#1054ee",
    // backgroundColor: "#dae1f1"
  },
  bannerIMG_view: {},
  bannerIMG_image: {
    width: moderateScale(330),
    height: moderateScale(150),
  },
});
