import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {Container, Icon} from 'react-native-basic-elements';
import {moderateScale} from '../../Constants/PixelRatio';
import BackHeader from '../Header/BackHeader';
import {FONTS} from '../../Constants/Fonts';

const GoMechanicAssurance = () => {
  return (
    <Container style={{...styles.maincontainer}}>
      <View style={{}}>
        <BackHeader title="September 9,2023" />
        <Text
          style={{
            position: 'absolute',
            bottom: moderateScale(0),
            paddingLeft: moderateScale(30),
          }}>
          18:43 | GoMechanic
        </Text>
      </View>
      <View style={{borderWidth: moderateScale(0.5), borderColor: '#f2f2f2'}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            color: '#000',
            alignSelf: 'center',
            paddingTop: moderateScale(10),
            fontSize: moderateScale(17),
          }}>
          The GoMechanic Assurance
        </Text>
        <View
          style={{
            borderWidth: moderateScale(1),
            borderColor: '#e6e6e6',
            marginHorizontal: moderateScale(30),
            marginVertical: moderateScale(20),
          }}
        />
        <Text
          style={{
            fontFamily: FONTS.medium,
            color: '#000',
            alignSelf: 'center',
            paddingTop: moderateScale(10),
            fontSize: moderateScale(17),
            textAlign: 'center',
          }}>
          Up to <Text style={{color: 'red'}}>₹25,000</Text> worth of Protection
          {'\n'} every time you opt for a Doorstep{'\n'}
          Pickup
        </Text>
        <Image
          style={{...styles.serviceIMG_image}}
          source={require('../../Assets/images/BlogIMG1.jpg')}
        />

        <View style={{paddingHorizontal:moderateScale(20),paddingVertical:moderateScale(20)}}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="dot-single" type="Entypo" color="#c3c1c6" />
            <Text style={{fontFamily:FONTS.regular}}>
              We adhere to our operational excellence commitment towards
              delivering exceptional customer experience. Every time you Opt for
              a Free Pickup & Drop with GoMechanic, your car is covered under
              the GoMechanic Assurance Program. {'\n'}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="dot-single" type="Entypo" color="#c3c1c6" />
            <Text style={{fontFamily:FONTS.regular}}>
              With the GoMechanic Assurance Program, every customer is protected
              against any damages caused during the pickup and delivery of their
              cars by GoMechanic Executives up to a maximum of INR 25,000.{'\n'}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Icon name="dot-single" type="Entypo" color="#c3c1c6" />
            <Text style={{fontFamily:FONTS.regular}}>
              In the unlikely event of any damages during your car’s pick and
              drop, you can contact us at 9388893888 to claim the proven damage.{'\n'}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Icon name="dot-single" type="Entypo" color="#c3c1c6" />
            <Text style={{fontFamily:FONTS.regular}}>
              This is valid only for Car Services Paid Online. Please note that
              the claim amount will be processed only when damages are proven
              caused by GoMechanic.{'\n'}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Icon name="dot-single" type="Entypo" color="#c3c1c6" />
            <Text style={{fontFamily:FONTS.regular}}>
              The GoMechanic Assurance coverage is valid only on Periodic
              Services, AC Services, Cleaning & Detailing, Denting & Painting,
              Wheel care Services, Tyres, Batteries, Glasses, Lights, Suspension
              & Fitments and Insurance Claim categories.{'\n'}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Icon name="dot-single" type="Entypo" color="#c3c1c6" />
            <Text style={{fontFamily:FONTS.regular}}>
              The GoMechanic Assurance program is not valid on Walk-in and
              Cancelled orders.{'\n'} 
            </Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default GoMechanicAssurance;

const styles = StyleSheet.create({
  maincontainer: {
    paddingHorizontal: moderateScale(10),
  },
  serviceIMG_image: {
    height: moderateScale(200),
    width: '100%',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(20),
    // marginLeft: moderateScale(15),
  },
});
