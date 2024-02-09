import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Accordion, Container} from 'react-native-basic-elements';
import BackHeader from '../../../Header/BackHeader';
import {FONTS} from '../../../../Constants/Fonts';
import {moderateScale} from '../../../../Constants/PixelRatio';
import ReactNativeModal from 'react-native-modal';
import MOBILmodel from '../../../BasicServiceComponent/MOBILmodel';
import FrequentlyAsked from '../../../BasicServiceComponent/FrequentlyAsked';
import OBDFrequentlyAskedQuestions from '../../FrequentlyAskedQuestions/OBDFrequentlyAskedQuestions';
// const {height, width} = Dimensions.get('screen');

const SmartDeviceSmaterCar = () => {
  const data = [
    {
      image: require('../../../../Assets/images/SMART8.png'),
      title: ' Tow Alerts',
      dist: 'Get notified,if your car is being towed or moved while is parked',
    },
    {
      image: require('../../../../Assets/images/SMART9.png'),
      title: ' Emergency Calling',
      dist: 'Get notified,if your car is being towed or moved while is parked',
    },
    {
      image: require('../../../../Assets/images/SMART10.png'),
      title: ' Fule Mileage',
      dist: 'Get notified,if your car is being towed or moved while is parked',
    },
    {
      image: require('../../../../Assets/images/SMART11.png'),
      title: ' Accident Alerts',
      dist: 'Get notified,if your car is being towed or moved while is parked',
    },
    {
      image: require('../../../../Assets/images/SMART12.png'),
      title: 'End-To-End Encryption',
      dist: 'Get notified,if your car is being towed or moved while is parked',
    },
  ];

  return (
    <>
      <Container style={styles.maincontainer}>
        <BackHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{...styles.text}}>SMART DEVICE.</Text>
          <Text style={{...styles.text}}>SMARTER CAR.</Text>

          <Image
            style={{height: moderateScale(100), width: '100%'}}
            source={require('../../../../Assets/images/SMART1.png')}
          />

          <Text
            style={{
              fontFamily: FONTS.regular,
              textAlign: 'center',
              paddingTop: moderateScale(25),
            }}>
            All you need to know about your car,at your {'\n'}fingertips!
          </Text>
          <Text
            style={{
              fontFamily: FONTS.bold,
              textAlign: 'center',
              paddingVertical: moderateScale(25),
              color: '#000',
              fontSize: moderateScale(15),
            }}>
            Key Features
          </Text>
          {/* -----------------------------------  Key Features Start----------------------------------- */}
          <View style={{...styles.view_style}}>
            <View style={{height: 200, width: '60%'}}>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  color: '#000',
                  fontSize: moderateScale(15),
                  padding: moderateScale(15),
                }}>
                Real-Time location
              </Text>
              <Text
                numberOfLines={4}
                style={{
                  fontFamily: FONTS.regular,
                  maxWidth: '80%',
                  paddingLeft: moderateScale(15),
                }}>
                Stay connected with your car with live GPS tracking and
                real-time speed monitoring.
              </Text>
            </View>
            <Image
              style={{
                height: moderateScale(150),
                width: '40%',
                alignSelf: 'center',
              }}
              source={require('../../../../Assets/images/SMART2.png')}
            />
          </View>

          <View style={{...styles.left_view_style}}>
            <Image
              style={{
                height: moderateScale(150),
                width: '40%',
                alignSelf: 'center',
              }}
              source={require('../../../../Assets/images/SMART3.png')}
            />

            <View style={{height: 200, width: '60%'}}>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  color: '#000',
                  fontSize: moderateScale(15),
                  padding: moderateScale(15),
                }}>
                Health Report
              </Text>
              <Text
                numberOfLines={4}
                style={{
                  fontFamily: FONTS.regular,
                  maxWidth: '80%',
                  paddingLeft: moderateScale(15),
                }}>
                Stay connected with your car with live GPS tracking and
                real-time speed monitoring.
              </Text>
            </View>
          </View>

          <View style={{...styles.view_style}}>
            <View style={{height: 200, width: '60%'}}>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  color: '#000',
                  fontSize: moderateScale(15),
                  padding: moderateScale(15),
                }}>
                Driving Behaviour
              </Text>
              <Text
                numberOfLines={4}
                style={{
                  fontFamily: FONTS.regular,
                  maxWidth: '80%',
                  paddingLeft: moderateScale(15),
                }}>
                Stay connected with your car with live GPS tracking and
                real-time speed monitoring.
              </Text>
            </View>
            <Image
              style={{
                height: moderateScale(150),
                width: '40%',
                alignSelf: 'center',
              }}
              source={require('../../../../Assets/images/SMART4.png')}
            />
          </View>

          <View style={{...styles.left_view_style}}>
            <Image
              style={{
                height: moderateScale(150),
                width: '40%',
                alignSelf: 'center',
              }}
              source={require('../../../../Assets/images/SMART5.png')}
            />

            <View style={{height: 200, width: '60%'}}>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  color: '#000',
                  fontSize: moderateScale(15),
                  padding: moderateScale(15),
                }}>
                Smart Alerts
              </Text>
              <Text
                numberOfLines={4}
                style={{
                  fontFamily: FONTS.regular,
                  maxWidth: '80%',
                  paddingLeft: moderateScale(15),
                }}>
                Stay connected with your car with live GPS tracking and
                real-time speed monitoring.
              </Text>
            </View>
          </View>

          <View style={{...styles.view_style}}>
            <View style={{height: 200, width: '60%'}}>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  color: '#000',
                  fontSize: moderateScale(15),
                  padding: moderateScale(15),
                }}>
                Geo-Fencing
              </Text>
              <Text
                numberOfLines={4}
                style={{
                  fontFamily: FONTS.regular,
                  maxWidth: '80%',
                  paddingLeft: moderateScale(15),
                }}>
                Stay connected with your car with live GPS tracking and
                real-time speed monitoring.
              </Text>
            </View>
            <Image
              style={{
                height: moderateScale(150),
                width: '40%',
                alignSelf: 'center',
              }}
              source={require('../../../../Assets/images/SMART6.png')}
              resizeMode="contain"
            />
          </View>

          <View style={{...styles.left_view_style}}>
            <Image
              style={{
                height: moderateScale(150),
                width: '40%',
                alignSelf: 'center',
              }}
              source={require('../../../../Assets/images/SMART7.png')}
            />

            <View style={{height: 200, width: '60%'}}>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  color: '#000',
                  fontSize: moderateScale(15),
                  padding: moderateScale(15),
                }}>
                Anti-Theft Alarm
              </Text>
              <Text
                numberOfLines={4}
                style={{
                  fontFamily: FONTS.regular,
                  maxWidth: '80%',
                  paddingLeft: moderateScale(15),
                }}>
                Stay connected with your car with live GPS tracking and
                real-time speed monitoring.
              </Text>
            </View>
          </View>
          {/* -----------------------------------  Key Features ENd----------------------------------- */}

          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: moderateScale(15),
              textAlign: 'center',
              color: '#000',
              paddingBottom: moderateScale(10),
            }}>
            Other features
          </Text>

          <View style={{...styles.other_view_style}}>
            {data?.map((item, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: moderateScale(20),
                  }}>
                  <Image
                    style={{
                      height: moderateScale(50),
                      width: moderateScale(50),
                      // alignSelf: 'center',
                      padding: moderateScale(20),
                    }}
                    source={item.image}
                  />

                  <View style={{height: moderateScale(50), width: '80%'}}>
                    <Text style={{fontFamily: FONTS.bold, color: '#000'}}>
                      {item.title}
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={{maxWidth: '90', fontFamily: FONTS.regular}}>
                      {item.dist}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>

          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: moderateScale(15),
              textAlign: 'center',
              color: '#000',
              paddingBottom: moderateScale(10),
            }}>
            Get-Set-Go in 3 Easy Steps!
          </Text>

          <Image
            style={{
              height: moderateScale(100),
              width: '100%',
              // alignSelf: 'center',
              marginHorizontal: moderateScale(10),
              padding: moderateScale(20),
            }}
            source={require('../../../../Assets/images/SMART13.jpg')}
          />
          <Text
            style={{
              fontFamily: FONTS.medium,
              textAlign: 'center',
              paddingTop: moderateScale(25),
              fontSize: moderateScale(14),
            }}>
            Locate your car's OBD port and follow these {'\n'}simple steps
          </Text>

          <View
            style={{
              paddingVertical: moderateScale(10),
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(25),
              paddingBottom: moderateScale(90),
            }}>
            <View
              style={{
                height: moderateScale(50),
                width: moderateScale(60),
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontFamily: FONTS.bold}}>1</Text>
              <Image
                style={{
                  height: moderateScale(70),
                  width: moderateScale(70),
                  // alignSelf: 'center',
                  marginHorizontal: moderateScale(10),
                  padding: moderateScale(20),
                }}
                source={require('../../../../Assets/images/SMART14.png')}
              />
              <Text style={{textAlign: 'center'}}>
                Plug the GoConnect device.
              </Text>
            </View>

            <View
              style={{
                height: moderateScale(50),
                width: moderateScale(60),
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontFamily: FONTS.bold}}>2</Text>
              <Image
                style={{
                  height: moderateScale(70),
                  width: moderateScale(70),
                  // alignSelf: 'center',
                  marginHorizontal: moderateScale(10),
                  padding: moderateScale(20),
                }}
                source={require('../../../../Assets/images/SMART15.png')}
              />
              <Text style={{textAlign: 'center'}}>
                Plug the GoConnect device.
              </Text>
            </View>

            <View
              style={{
                height: moderateScale(50),
                width: moderateScale(60),
                alignItems: 'center',
              }}>
              <Text style={{color: '#000', fontFamily: FONTS.bold}}>3</Text>
              <Image
                style={{
                  height: moderateScale(70),
                  width: moderateScale(70),
                  // alignSelf: 'center',
                  marginHorizontal: moderateScale(10),
                  padding: moderateScale(20),
                }}
                source={require('../../../../Assets/images/SMART16.png')}
              />
              <Text style={{textAlign: 'center'}}>
                Plug the GoConnect device.
              </Text>
            </View>
          </View>
          {/* ---------------------------------------------Frequently Asked Questions Start------------------------------------------------------ */}

          <Accordion
            title="Frequently Asked Questions"
            containerStyle={
              {
                // margin: 10,
              }
            }
            titleStyle={{fontSize: moderateScale(12), fontFamily: FONTS.medium}}
            shadow={true}>
            <OBDFrequentlyAskedQuestions />
          </Accordion>
          {/* ---------------------------------------------Frequently Asked Questions End------------------------------------------------------ */}
        </ScrollView>
      </Container>
    </>
  );
};

export default SmartDeviceSmaterCar;

const styles = StyleSheet.create({
  maincontainer: {},
  text: {
    fontFamily: FONTS.bold,
    fontSize: moderateScale(25),
    textAlign: 'center',
    color: '#000',
    fontStyle: 'normal',
  },
  view_style: {
    backgroundColor: '#edebeb',
    flexDirection: 'row',
    height: moderateScale(160),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(20),
  },
  left_view_style: {
    backgroundColor: '#edebeb',
    flexDirection: 'row',
    height: moderateScale(160),
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(20),
  },

  other_view_style: {
    backgroundColor: '#edebeb',
    height: moderateScale(350),
    marginBottom: moderateScale(20),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
  },
});
