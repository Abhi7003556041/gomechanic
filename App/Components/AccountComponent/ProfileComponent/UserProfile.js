import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  AppButton,
  AppTextInput,
  Card,
  Container,
  Icon,
  RadioButton,
} from 'react-native-basic-elements';
import { moderateScale } from '../../../Constants/PixelRatio';
import BackHeader from '../../Header/BackHeader';
import { FONTS } from '../../../Constants/Fonts';

const UserProfile = () => {
  const [selected, setSelected] = useState(false);
  const [selected2, setSelected2] = useState(false);

  // calander state 
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };


  return (
    <Container style={{ ...styles.MainContainer }}>
      <BackHeader title="My Profile" />
      <View
        style={{
          borderWidth: moderateScale(0.3),
          borderColor: '#ddd5de',
          marginBottom: moderateScale(10),
        }}
      />

      <Card style={{ ...styles.mainCard }}>
        <Text style={{ fontFamily: FONTS.medium, color: '#000' }}>
          PERSONAL DETAILS
        </Text>
        <View
          style={{
            borderWidth: moderateScale(0.2),
            marginVertical: moderateScale(10),
            borderColor: "#c9c5c4"
          }}
        />

        <AppTextInput.Outlined
          placeholder="Name"
          secureTextEntry={false}
          containerStyle={{
            marginHorizontal: 10,
          }}
        />

        <AppTextInput.Outlined
          placeholder="Email"
          secureTextEntry={false}
          containerStyle={{
            marginHorizontal: 10,
          }}
        />

        <AppTextInput.Outlined
          placeholder="Mobile no"
          secureTextEntry={false}
          containerStyle={{
            marginHorizontal: 10,
          }}
        />

        <AppTextInput.Outlined
          placeholder="Date of Birth"
          secureTextEntry={false}
          // activeColor={"red"}
          rightAction={
            <Pressable
            onPress={()=>showDatePicker()}
            >
            <Icon
              name="calendar-range"
              type="MaterialCommunityIcon"
              color={'red'}
              size={25}
              
            />
            </Pressable>
          }
          containerStyle={{
            marginHorizontal: 10,
          }}
        />

        {/* ----------------------------------------------------------------------- */}
      
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        {/* ----------------------------------------------------------------------- */}

        <Text style={{ padding: moderateScale(15), fontFamily: FONTS.regular }}>
          Gender
        </Text>
        <View style={{ flexDirection: 'row', paddingLeft: moderateScale(15) }}>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              selected={selected}
              onChange={val => setSelected(val)}
              size={20}
              activeColor={'#6e6c6b'}
            />
            <Text style={{ fontFamily: FONTS.medium, paddingLeft: moderateScale(5) }}>Male</Text>
          </View>

          <View style={{ flexDirection: 'row', paddingLeft: moderateScale(20) }}>
            <RadioButton
              selected={selected2}
              onChange={val => setSelected2(val)}
              size={20}
              activeColor={'#6e6c6b'}
            />
            <Text style={{ fontFamily: FONTS.medium, paddingLeft: moderateScale(5) }}>Female</Text>
          </View>
        </View>

        <AppButton
          shadow={true}
          title="SAVE"
          textStyle={{ color: '#fff' }}
          containerStyle={{ hight: moderateScale(20) }}
          onPress={() => { }}
          style={{ marginTop: moderateScale(25) }}
        />
      </Card>

      <Text
        style={{
          textDecorationLine: 'underline',
          color: '#000',
          alignSelf: 'center',
          paddingVertical: moderateScale(10),
          fontFamily: FONTS.medium,
        }}>
        Delete Personal Details
      </Text>
    </Container>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  MainContainer: {
    paddingHorizontal: moderateScale(10),
    mainCard: {
      // borderWidth: moderateScale(2),
      // hight:moderateScale(500)
    },
  },
});
