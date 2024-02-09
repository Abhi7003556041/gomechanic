import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container, Icon} from 'react-native-basic-elements';
import {moderateScale} from '../../Constants/PixelRatio';
import BackHeader from '../Header/BackHeader';
import {FONTS} from '../../Constants/Fonts';
import {ScrollView} from 'react-native-gesture-handler';

const FulePrices = () => {
  const data = [
    {
      date: '11 Sep,2023',
      petrol: '106.03',
      diesel: '92.76',
      cng: 'NA',
    },
    {
      date: '11 Sep,2023',
      petrol: '106.03',
      diesel: '92.76',
      cng: 'NA',
    },

    {
      date: '11 Sep,2023',
      petrol: '106.03',
      diesel: '92.76',
      cng: 'NA',
    },

    {
      date: '11 Sep,2023',
      petrol: '106.03',
      diesel: '92.76',
      cng: 'NA',
    },

    {
      date: '11 Sep,2023',
      petrol: '106.03',
      diesel: '92.76',
      cng: 'NA',
    },

    {
      date: '11 Sep,2023',
      petrol: '106.03',
      diesel: '92.76',
      cng: 'NA',
    },
    {
      date: '11 Sep,2023',
      petrol: '106.03',
      diesel: '92.76',
      cng: 'NA',
    },
  ];

  return (
    <>
      <BackHeader title="Fuel Prices" />

      <Container style={styles.maincontainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>Showing prices for 12th Sep,2023</Text>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: moderateScale(10),
              alignItems: 'center',
            }}>
            <Icon
              name="location-sharp"
              type="Ionicon"
              size={20}
              color={'red'}
            />
            <Text
              style={{
                fontFamily: FONTS.bold,
                color: '#000',
                fontSize: moderateScale(15),
                paddingHorizontal: moderateScale(7),
              }}>
              Kolkata
            </Text>
            <Icon name="pen" type="FontAwesome5" size={15} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(10),
              paddingVertical: moderateScale(10),
            }}>
            <View style={{...styles.dash_main}}>
              <View style={{...styles.dash_menu1}}>
                <Text style={{color: '#6bafe7', fontFamily: FONTS.medium}}>
                  ₹ 106.03
                </Text>
                <Text>
                  <Text style={{color: '#6bafe7', fontFamily: FONTS.medium}}>
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
                  <Text style={{color: '#6bafe7', fontFamily: FONTS.medium}}>
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
                  <Text style={{color: '#6bafe7', fontFamily: FONTS.medium}}>
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

          <Text style={{fontFamily: FONTS.regular}}>
            Note: there may be slight variation in the prices from outlet to
            outlet within a city
          </Text>
          <View style={{flexDirection: 'row', padding: moderateScale(15)}}>
            <View
              style={{
                backgroundColor: 'red',
                width: '6%',
                height: moderateScale(19),
                borderRadius: moderateScale(3),
              }}>
              <Icon
                name="trending-up-sharp"
                type="Ionicon"
                size={20}
                color={'#fff'}
              />
            </View>

            <Text
              style={{
                fontFamily: FONTS.bold,
                color: '#000',
                paddingLeft: moderateScale(10),
              }}>
              Trend for last 7 days
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: moderateScale(10),
            }}>
            <Text style={{fontFamily: FONTS.medium, color: '#000'}}>Date</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: '#000',
                  paddingLeft: moderateScale(25),
                }}>
                PETROL
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: '#000',
                  paddingLeft: moderateScale(25),
                }}>
                DIESEL
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  color: '#000',
                  paddingLeft: moderateScale(25),
                }}>
                CNG
              </Text>
            </View>
          </View>
          {data?.map((item, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(10),
                  paddingVertical: moderateScale(10),
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    color: '#000',
                    paddingRight: moderateScale(25),
                  }}>
                  {item.date}
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    color: '#000',
                    //   paddingLeft: moderateScale(15),
                  }}>
                  {item.petrol}
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    color: '#000',
                    //   paddingLeft: moderateScale(15),
                  }}>
                  {item.diesel}
                </Text>
                <Text
                  style={{
                    fontFamily: FONTS.regular,
                    color: '#000',
                    //   paddingLeft: moderateScale(15),
                  }}>
                  {item.cng}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </Container>
    </>
  );
};

export default FulePrices;

const styles = StyleSheet.create({
  maincontainer: {
    paddingHorizontal: moderateScale(10),
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
});
