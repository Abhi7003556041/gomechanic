import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppTextInput,
  Card,
  Container,
  Icon,
  RadioButton,
} from 'react-native-basic-elements';
import BackHeader from '../Header/BackHeader';
import {FONTS} from '../../Constants/Fonts';
import {moderateScale} from '../../Constants/PixelRatio';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../../Services/Navigation';

const GoConnect = () => {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);

  const helpIcon = [
    {
      image: require('../../Assets/images/hlepI1con.png'),
      text: 'GPS Tracking',
    },
    {
      image: require('../../Assets/images/goconnecticon1.png'),
      text: 'Health Report',
    },
    {
      image: require('../../Assets/images/goconnecticon3.png'),
      text: 'Driving Analysis',
    },
    {
      image: require('../../Assets/images/goconnecticon2.png'),
      text: 'Accident Alerts',
    },
  ];

  const data = [
    {
      image: require('../../Assets/images/t1.png'),
      text: 'Know Your Cover',
    },
    {
      image: require('../../Assets/images/t2.png'),
      text: 'Get Huge Discounts',
    },
    {
      image: require('../../Assets/images/t3.png'),
      text: 'Save on Renewal',
    },
  ];

  const lastView = [
    {
      image: require('../../Assets/images/last1.png'),
      text: 'Traffic Rules & Fines',
    },
    {
      image: require('../../Assets/images/last2.png'),
      text: 'Message Car Owner',
    },
    {
      image: require('../../Assets/images/last3.png'),
      text: 'Setup Your OBD',
    },
  ];

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <BackHeader title="My Cars" />
        <View style={{flexDirection: 'row', paddingRight: moderateScale(20)}}>
          <Icon name="pen" type="FontAwesome5" color="red" size={20} />
          <Text
            style={{
              flexDirection: 'row',
              color: 'red',
              fontFamily: FONTS.medium,
              paddingLeft: moderateScale(10),
            }}>
            Change Car
          </Text>
        </View>
      </View>
      <View style={{borderWidth: moderateScale(0.2), borderColor: '#ebc7c7'}} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: moderateScale(15)}}>
          <TouchableOpacity
          onPress={()=>NavigationService.navigate("SmartDeviceSmaterCar")}
          >
            <Card style={{...styles.dashbord_view1}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontFamily: FONTS.semibold,
                        color: '#000',
                        fontSize: moderateScale(15),
                      }}>
                      GoConnect
                    </Text>
                  </View>
                  <Text>Smarter Car with</Text>
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    marginRight: moderateScale(20),
                    borderWidth: moderateScale(0.3),
                    borderRadius: moderateScale(3),
                  }}>
                  <Icon
                    name="arrowright"
                    type="AntDesign"
                    color="red"
                    style={{padding: moderateScale(5)}}
                  />
                </View>
              </View>
            </Card>
          <Card style={{...styles.dashbord_view2}}>
            {helpIcon?.map((item, index) => {
              return (
                <View style={{...styles.helpView}}>
                  <Image style={{...styles.helpIcon}} source={item.image} />
                  <Text numberOfLines={2} style={{...styles.helpIconText}}>
                    {item.text}
                  </Text>
                </View>
              );
            })}
          </Card>
          </TouchableOpacity>

          <Card style={{...styles.dashbord_view3}}>
            <Image
              style={{height: moderateScale(100), width: '70%'}}
              source={require('../../Assets/images/imgsingle2.png')}
              // resizeMode='contain'
            />
            <Text
              style={{
                fontFamily: FONTS.bold,
                paddingTop: moderateScale(20),
                fontSize: moderateScale(15),
                color: '#000',
              }}>
              Honda City IVTEC
            </Text>
            <Text style={{fontFamily: FONTS.regular}}>Petrol</Text>
          </Card>

          <Card style={{...styles.dashbord_view4}}>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: moderateScale(15),
                color: '#000',
              }}>
              Verify Your Car
            </Text>
            <AppTextInput
              placeholder="  Registration Number"
              rightAction={
                <Text
                  style={{
                    color: 'red',
                    fontFamily: FONTS.bold,
                    paddingRight: moderateScale(5),
                  }}>
                  SUBMIT
                </Text>
              }
              inputContainerStyle={{
                borderRadius: moderateScale(5),
                borderWidth: moderateScale(2),
              }}
            />

            <View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: moderateScale(12),
                  paddingVertical: moderateScale(10),
                }}>
                Why Get Verified?
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="checkcircle"
                  type="AntDesign"
                  color="#7ae66d"
                  style={{padding: moderateScale(5)}}
                />
                <Text>Get Best Prices For Your Car Service</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="checkcircle"
                  type="AntDesign"
                  color="#7ae66d"
                  style={{padding: moderateScale(5)}}
                />
                <Text>Easily Check Active/Pending Challans</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="checkcircle"
                  type="AntDesign"
                  color="#7ae66d"
                  style={{padding: moderateScale(5)}}
                />
                <Text>Scan & Notify Feature Enabled</Text>
              </View>
            </View>
          </Card>

          <Card style={{...styles.dashbord_view5}}>
            <Text style={{fontFamily: FONTS.medium}}>Change Car Color</Text>
            <Icon name="pen" type="FontAwesome5" color="#000" size={15} />
          </Card>

          <Card style={{...styles.dashbord_view6}}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                color: '#000',
                fontSize: moderateScale(14),
              }}>
              Select Transmission
            </Text>
            <Text
              style={{
                fontFamily: FONTS.regular,
                paddingVertical: moderateScale(5),
              }}>
              Transmission Type:
              <Text style={{fontFamily: FONTS.medium, color: '#000'}}>
                Manual
              </Text>
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{...styles.Transmission_button}}>
                <RadioButton
                  activeColor={'red'}
                  selected={selected1}
                  onChange={val => setSelected1(val)}
                  size={20}
                  color={'red'}
                />
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    paddingLeft: moderateScale(5),
                  }}>
                  Manual
                </Text>
              </View>

              <View style={{...styles.Transmission_button}}>
                <RadioButton
                  activeColor={'red'}
                  selected={selected2}
                  onChange={val2 => setSelected2(val2)}
                  size={20}
                  color={'red'}
                />
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    paddingLeft: moderateScale(5),
                  }}>
                  Automatic
                </Text>
              </View>
            </View>
          </Card>

          <Card style={{...styles.dashbord_view7}}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                color: '#000',
                fontSize: moderateScale(14),
              }}>
              Select Transmission
            </Text>
            <Text
              style={{
                fontFamily: FONTS.regular,
                paddingVertical: moderateScale(5),
              }}>
              Get In-Depth Policy Breakup & Analysis
            </Text>
          </Card>

          <Card style={{...styles.dashbord_view8}}>
            {data?.map((item, index) => {
              return (
                <View style={{...styles.helpView}}>
                  <Image style={{...styles.helpIcon}} source={item.image} />
                  <Text numberOfLines={2} style={{...styles.helpIconText}}>
                    {item.text}
                  </Text>
                </View>
              );
            })}
          </Card>

          <Card style={{...styles.dashbord_view9}}>
            <Icon
              name="discount"
              type="MaterialIcon"
              color="#40c64c"
              style={{padding: moderateScale(5)}}
            />
            <Text style={{color: '#40c64c', fontFamily: FONTS.medium}}>
              Upload Policy & Get Free Wiper Blade
            </Text>
          </Card>
          <TouchableOpacity
            onPress={() => NavigationService.navigate('FulePrices')}>
            <Card style={{...styles.dashbord_view10}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{...styles.dash_main}}>
                  <View style={{...styles.dash_menu1}}>
                    <Text style={{color: '#6bafe7', fontFamily: FONTS.medium}}>
                      ₹ 106.03
                    </Text>
                    <Text>
                      <Text
                        style={{color: '#6bafe7', fontFamily: FONTS.medium}}>
                        ---
                      </Text>
                      0
                    </Text>
                    <Text>Kolkata</Text>
                  </View>
                  <View style={{...styles.dash_menu2}}>
                    <Text>PETROL</Text>
                  </View>
                </View>

                <View style={{...styles.dash_main}}>
                  <View style={{...styles.dash_menu1}}>
                    <Text style={{color: '#6bafe7', fontFamily: FONTS.medium}}>
                      ₹ 106.03
                    </Text>
                    <Text>
                      <Text
                        style={{color: '#6bafe7', fontFamily: FONTS.medium}}>
                        ---
                      </Text>
                      0
                    </Text>
                    <Text>Kolkata</Text>
                  </View>
                  <View style={{...styles.dash_menu2}}>
                    <Text>PETROL</Text>
                  </View>
                </View>

                <View style={{...styles.dash_main}}>
                  <View style={{...styles.dash_menu1}}>
                    <Text style={{color: '#6bafe7', fontFamily: FONTS.medium}}>
                      ₹ 106.03
                    </Text>
                    <Text>
                      <Text
                        style={{color: '#6bafe7', fontFamily: FONTS.medium}}>
                        ---
                      </Text>
                      0
                    </Text>
                    <Text>Kolkata</Text>
                  </View>
                  <View style={{...styles.dash_menu2}}>
                    <Text>CNG</Text>
                  </View>
                </View>
              </View>

              <AppTextInput
                leftIcon={{
                  name: 'fuel',
                  type: 'MaterialCommunityIcon',
                }}
                placeholder="View in All cities"
                rightAction={<Icon name="right" type="AntDesign" />}
              />
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => NavigationService.navigate('TrafficRulesAndFines')}>
            <View style={{...styles.dashbord_view11}}>
              {lastView?.map((item, index) => {
                return (
                  <Card style={{...styles.lastView}}>
                    <Image style={{...styles.helpIcon}} source={item.image} />
                    <Text numberOfLines={2} style={{...styles.helpIconText}}>
                      {item.text}
                    </Text>
                  </Card>
                );
              })}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

export default GoConnect;

const styles = StyleSheet.create({
  dashbord_view1: {
    borderWidth: moderateScale(0.2),
    height: moderateScale(80),
    marginTop: moderateScale(20),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(0),
    borderBottomRightRadius: moderateScale(0),
    borderColor: '#c9c5c9',
    justifyContent: 'center',
    paddingLeft: moderateScale(10),
  },
  dashbord_view2: {
    borderWidth: moderateScale(0.2),
    height: moderateScale(120),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(0),
    borderTopRightRadius: moderateScale(0),
    borderColor: '#c9c5c9',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(5),
  },
  dashbord_view3: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(180),
    borderBottomLeftRadius: moderateScale(0),
    borderBottomRightRadius: moderateScale(0),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    borderColor: '#c9c5c9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
    marginTop: moderateScale(20),
  },
  dashbord_view4: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(220),
    borderRadius: moderateScale(0),
    borderColor: '#c9c5c9',
    paddingHorizontal: moderateScale(5),
  },
  dashbord_view5: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(50),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(0),
    borderTopRightRadius: moderateScale(0),
    borderColor: '#c9c5c9',
    paddingHorizontal: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },

  dashbord_view6: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(120),
    borderRadius: moderateScale(10),
    borderColor: '#c9c5c9',
    marginVertical: moderateScale(20),
  },
  dashbord_view7: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(60),
    borderRadius: moderateScale(10),
    borderColor: '#c9c5c9',
    borderBottomLeftRadius: moderateScale(0),
    borderBottomRightRadius: moderateScale(0),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
  },
  dashbord_view8: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(120),
    borderRadius: moderateScale(0),
    borderColor: '#c9c5c9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(25),
  },
  dashbord_view9: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(50),
    borderRadius: moderateScale(10),
    borderColor: '#c9c5c9',
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(0),
    borderTopRightRadius: moderateScale(0),
    backgroundColor: '#ffefd8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dashbord_view10: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(175),
    borderRadius: moderateScale(0),
    borderColor: '#c9c5c9',
    // flexDirection: "row",
    justifyContent: 'space-between',
    marginVertical: moderateScale(20),
    borderRadius: moderateScale(10),
  },
  dashbord_view11: {
    height: moderateScale(120),
    borderRadius: moderateScale(0),
    borderColor: '#c9c5c9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: moderateScale(10),
  },
  dash_main: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(100),
    width: '30%',
    borderRadius: moderateScale(10),
  },
  dash_menu1: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(70),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
    backgroundColor: '#e2f2ff',
  },
  dash_menu2: {
    borderWidth: moderateScale(0.3),
    height: moderateScale(30),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
  },

  helpView: {
    alignItems: 'center',
    width: '25%',
    justifyContent: 'center',
  },
  helpIcon: {
    height: moderateScale(60),
    resizeMode: 'contain',
  },
  helpIconText: {
    maxWidth: '90%',
    textAlign: 'center',
  },
  Transmission_button: {
    flexDirection: 'row',
    borderWidth: moderateScale(0.3),
    height: moderateScale(45),
    width: '47%',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
  },
  lastView: {
    alignItems: 'center',
    width: '30%',
    justifyContent: 'center',
  },
});
