import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FONTS } from '../../Constants/Fonts'
import { Container, Icon } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'

const MOBILmodel = ({ isModalVisible, setModalVisible,Dataa }) => {
  const Additional =
    [
      {
        icon: <Icon name="checkcircle" type='AntDesign' color="#50c63e" />,
        title: "Mobil Super Friction Fighter Technology",
      },
      {
        icon: <Icon name="checkcircle" type='AntDesign' color="#50c63e" />,
        title: "Provides Longer oil Drain Intervals",
      },
      {
        icon: <Icon name="checkcircle" type='AntDesign' color="#50c63e" />,
        title: "Moderate Viscosity Index Of 158",
      },
    ]
  return (
    <Container>
      {/* ------------------------Additional Services Start------------------------------- */}
      <View style={{ ...styles.main_view }}>
        <Text style={{ ...styles.main_view_text }}>{Dataa?.full_name_material}</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
        >
          <Icon name="close" type='AntDesign' />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.AdditionalServices_View }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {Dataa?.detail_point?.map((item, index) => {
          return (<>
            <View style={{ ...styles.loop_view }}>
            <Icon name="checkcircle" type='AntDesign' color="#50c63e" />
              <Text style={{ ...styles.loop_view_text }}>{item}</Text>
            </View>
          </>)
        })}
      </ScrollView>
      </View>
      {/* ------------------------Additional Services END------------------------------- */}
    </Container>
  )
}

export default MOBILmodel

const styles = StyleSheet.create({
  AdditionalServices_View: {
    borderTopWidth: moderateScale(0.2),
    // height: moderateScale(170),
    marginVertical: moderateScale(10),
    borderColor: "#d2d2d2"
  },
  main_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(15)

  },
  main_view_text: {
    fontFamily: FONTS.bold,
    paddingLeft: moderateScale(10),
    color: "#000"

  },
  loop_view: {
    flexDirection: "row",
    paddingTop: moderateScale(20),
    paddingLeft: moderateScale(10)
  },
  loop_view_text: {
    fontFamily: FONTS.bold,
    paddingLeft: moderateScale(5),
    fontSize: moderateScale(11)
  }

})