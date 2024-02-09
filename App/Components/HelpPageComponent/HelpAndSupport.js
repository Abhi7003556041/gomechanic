import {ScrollView, StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {Card, Container, Icon} from 'react-native-basic-elements';
import BackHeader from '../Header/BackHeader';
import {moderateScale} from '../../Constants/PixelRatio';
import {Image} from 'react-native';
import {FONTS} from '../../Constants/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';

const HelpAndSupport = () => {
  const data = [
    {
      text1: 'About GoMechanic',
      text2: 'Service Offered Free Picup',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'About GoMechanic',
      text2: 'Service Offered Free Picup',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'About GoMechanic',
      text2: 'Service Offered Free Picup',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'About GoMechanic',
      text2: 'Service Offered Free Picup',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'About GoMechanic',
      text2: 'Service Offered Free Picup',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'About GoMechanic',
      text2: 'Service Offered Free Picup',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'About GoMechanic',
      text2: 'Service Offered Free Picup',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'About GoMechanic',
      text2: 'Service Offered Free Picup',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'About GoMechanic',
      text2: 'Service Offered Free Picup',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
    {
      text1: 'About GoMechanic',
      text2: 'Service Offered Free Picup',
      icon: (
        <Icon
          name="right"
          type="AntDesign"
          style={{paddingVertical: moderateScale(10)}}
        />
      ),
    },
  ];
  return (
    <>
      <View style={{...styles.Main_header_View}}>
        <TouchableOpacity onPress={() => NavigationService.back()}>
          <Icon
            name="arrowleft"
            type="AntDesign"
            color="#fff"
            style={{paddingVertical: moderateScale(10)}}
          />
        </TouchableOpacity>
        <Text style={{color: '#fff', fontSize: moderateScale(20)}}>
          Help & Support
        </Text>
      </View>
      <Container style={{...styles.Main_container}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(20),
              paddingVertical: moderateScale(10),
            }}>
            <View>
              <Text
                style={{fontFamily: FONTS.medium, fontSize: moderateScale(13)}}>
                You one stop solution center.
              </Text>
              <Text
                style={{fontFamily: FONTS.medium, fontSize: moderateScale(13)}}>
                We are happy to help you.
              </Text>
            </View>
            <Image
              style={{...styles.helpImage}}
              source={require('../../Assets/images/helpicon5.png')}
            />
          </View>

          <Card style={{...styles.Main_Card}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{color: '#000', fontFamily: FONTS.semibold}}>
                  Chat With Support
                </Text>
                <Text style={{fontFamily: FONTS.regular}}>
                  Live Agents Available 24 Hours
                </Text>
              </View>
              <View
                style={{
                  borderWidth: moderateScale(0.3),
                  height: moderateScale(25),
                  width: moderateScale(50),
                  alignSelf: 'center',
                  justifyContent: 'center',
                  borderRadius: moderateScale(5),
                }}>
                <Text style={{color: 'red', textAlign: 'center'}}>Chat</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: moderateScale(0.2),
                marginVertical: moderateScale(10),
                borderColor: '#babbbb',
              }}
            />
            {data?.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    NavigationService.navigate('HelpAndSupChild1')
                  }>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: moderateScale(20),
                    }}>
                    <View style={{paddingLeft: moderateScale(25)}}>
                      <Text style={{color: '#000', fontFamily: FONTS.semibold}}>
                        {item.text1}
                      </Text>
                      <Text style={{fontFamily: FONTS.regular}}>
                        {item.text2}
                      </Text>
                    </View>
                    <Icon
                      name="right"
                      type="AntDesign"
                      // color="#fff"
                      style={{paddingVertical: moderateScale(10)}}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </Card>
        </ScrollView>
      </Container>
    </>
  );
};

export default HelpAndSupport;

const styles = StyleSheet.create({
  Main_container: {
    paddingHorizontal: moderateScale(10),
  },
  Main_header_View: {
    height: moderateScale(80),
    backgroundColor: 'red',
    paddingLeft: moderateScale(10),
  },
  helpImage: {
    height: moderateScale(55),
    width: '20%',
  },
  Main_Card: {
    paddingVertical: moderateScale(10),
    // borderWidth: moderateScale(1),
    // height: moderateScale(500)
  },
});
