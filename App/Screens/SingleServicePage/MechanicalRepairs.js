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
import Bodypart from '../../Components/MechanicalRepairsComponents/Bodypart';
import Customissues from '../../Components/MechanicalRepairsComponents/Customissues';
import ClutchPart from '../../Components/MechanicalRepairsComponents/ClutchPart';
import KnowYourClutchAndFitment from '../../Components/MechanicalRepairsComponents/KnowYourClutchAndFitment';

const MechanicalRepairs = () => {
  const colors = useTheme();
  //button State
  const [Clutch, setClutch] = useState(true);
  const [BodyPart, setBodyPart] = useState(false);
  const [CustomIssues, setCustomIssues] = useState(false);

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
              setClutch(true);
              setBodyPart(false);
              setCustomIssues(false);
     
            }}>
            <View
              style={{
                ...styles.ServiceButton_Style,
                borderColor: Clutch ? '#1054ee' : '#b8afc7',
                backgroundColor: Clutch ? '#dae1f1' : '#fff',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: Clutch ? '#1054ee' : '#b8afc7',
                }}>
                Clutch
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setClutch(false);
              setBodyPart(true);
              setCustomIssues(false);
      
            }}>
            <View
              style={{
                ...styles.ServiceButton_Style,
                borderColor: BodyPart ? '#1054ee' : '#b8afc7',
                backgroundColor: BodyPart ? '#dae1f1' : '#fff',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: BodyPart ? '#1054ee' : '#b8afc7',
                }}>
                Body Part
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setClutch(false);
              setBodyPart(false);
              setCustomIssues(true);
            }}>
            <View
              style={{
                ...styles.ServiceButton_Style,
                borderColor: CustomIssues ? '#1054ee' : '#b8afc7',
                backgroundColor: CustomIssues ? '#dae1f1' : '#fff',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: CustomIssues ? '#1054ee' : '#b8afc7',
                }}>
                Custom Issues
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
        <ClutchPart />
        <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />

        <Bodypart />
        <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />

        <Customissues />
        <View style={{height: moderateScale(5), backgroundColor: '#e3dee1'}} />

        <KnowYourClutchAndFitment />
      </ScrollView>
    </Container>
  );
};

export default MechanicalRepairs;

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
