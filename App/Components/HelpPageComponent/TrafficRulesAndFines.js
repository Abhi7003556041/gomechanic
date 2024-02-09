import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container, Icon} from 'react-native-basic-elements';
import {moderateScale} from '../../Constants/PixelRatio';
import BackHeader from '../Header/BackHeader';
import {FONTS} from '../../Constants/Fonts';
import {ScrollView} from 'react-native-gesture-handler';

const TrafficRulesAndFines = () => {
  const data = [
    {
      violation: 'Driving vehicle withou D/l',
      penalty: '₹ 450',
    },

    {
      violation: 'Driving vehicle withou D/l',
      penalty: '₹ 450',
    },

    {
      violation: 'Driving vehicle withou D/l',
      penalty: '₹ 450',
    },

    {
      violation: 'Driving vehicle withou D/l',
      penalty: '₹ 450',
    },

    {
      violation: 'Driving vehicle withou D/l',
      penalty: '₹ 450',
    },

    {
      violation: 'Driving vehicle withou D/l',
      penalty: '₹ 450',
    },

    {
      violation: 'Driving vehicle withou D/l',
      penalty: '₹ 450',
    },

    {
      violation: 'Driving vehicle withou D/l',
      penalty: '₹ 450',
    },

    {
      violation: 'Driving vehicle withou D/l',
      penalty: '₹ 450',
    },

    {
      violation: 'Driving vehicle withou D/l',
      penalty: '₹ 450',
    },
  ];

  return (
    <>
      <BackHeader title="Traffic Rules and Fines" />
      <View style={{borderWidth: moderateScale(0.3), borderColor: '#adafb3'}} />
      <Container style={styles.maincontainer}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: moderateScale(10),
            alignItems: 'center',
          }}>
          <Icon name="location-sharp" type="Ionicon" size={20} color={'red'} />
          <Text
            style={{
              fontFamily: FONTS.bold,
              color: '#000',
              fontSize: moderateScale(15),
              paddingHorizontal: moderateScale(7),
            }}>
            West Bengal
          </Text>
          <Icon name="pen" type="FontAwesome5" size={15} />
        </View>

        <View style={{flexDirection: 'row', padding: moderateScale(15)}}>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: moderateScale(11),
              color: '#000',
            }}>
            03 May,2023
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <View style={{...styles.table_view1}}>
              <Text
                style={{
                  color: '#000',
                  padding: moderateScale(5),
                  fontFamily: FONTS.medium,
                }}>
                Violation
              </Text>
            </View>
            <View style={{...styles.table_view2}}>
              <Text
                style={{
                  color: '#000',
                  padding: moderateScale(5),
                  fontFamily: FONTS.medium,
                }}>
                Penalty
              </Text>
            </View>
          </View>
          {data?.map((item, index) => {
            return (
              <View style={{flexDirection: 'row'}}>
                <View style={{...styles.table_item_view1}}>
                  <Text
                    style={{
                      color: '#000',
                      padding: moderateScale(5),
                      fontFamily: FONTS.medium,
                    }}>
                    {item.violation}
                  </Text>
                </View>
                <View style={{...styles.table_item_view2}}>
                  <Text
                    style={{
                      color: '#000',
                      padding: moderateScale(5),
                      fontFamily: FONTS.medium,
                    }}>
                    {item.penalty}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </Container>
    </>
  );
};

export default TrafficRulesAndFines;

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
  table_view1: {
    borderWidth: moderateScale(0.2),
    height: moderateScale(30),
    backgroundColor: '#e6e8eb',
    alignItems: 'flex-start',
    width: '70%',
  },
  table_view2: {
    borderWidth: moderateScale(0.2),
    height: moderateScale(30),
    backgroundColor: '#e6e8eb',
    width: '30%',
  },

  table_item_view1: {
    borderWidth: moderateScale(0.2),
    height: '100%',
    // backgroundColor: '#e6e8eb',
    alignItems: 'flex-start',
    width: '70%',
  },
  table_item_view2: {
    borderWidth: moderateScale(0.2),
    height: '100%',
    // backgroundColor: '#e6e8eb',
    width: '30%',
  },
});
