import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Card, Container, Icon } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NavigationService from '../../Services/Navigation'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const Help = () => {
  const { login_status } = useSelector(state => state.User)
  const navigation = useNavigation()
  const helpIcon = [
    {
      image: require('../../Assets/images/hlepI1con.png'),
      text: "GoConnect OBD",
    },
    {
      image: require('../../Assets/images/hlepI2con.png'),
      text: "Fuel Prices",
    },
    {
      image: require('../../Assets/images/hlepI3con.png'),
      text: "Traffic Rules",
    },
    {
      image: require('../../Assets/images/hlepI4con.png'),
      text: "Car Scan",
    },
  ]

  // useEffect(()=>{
  //   login_status==false ?
  //   NavigationService.navigate('Login') : null
   
  // },[])
  return (
    <Container style={{ ...styles.Main_container }}>
      <Text style={{ ...styles.HeaderText }}>Help & Support</Text>
      <View style={{ ...styles.HeaderView }} />
      <ScrollView showsVerticalScrollIndicator={false}>


        <TouchableOpacity
          onPress={() => NavigationService.navigate("GoConnect")}


        >
          <View style={{ marginHorizontal: moderateScale(15) }}>
            <Card style={{ ...styles.dashbord_view1 }}>

              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontFamily: FONTS.semibold, color: "#000", fontSize: moderateScale(15) }}>Go to My Cars</Text>
                    <Icon
                      name="right"
                      type='AntDesign'
                    // color="red"
                    />
                  </View>
                  <Text>Manage Your Car & more</Text>
                </View>

                <View style={{ alignItems: "center", paddingRight: moderateScale(20) }}>
                  <Image
                    style={{ ...styles.carImage }}
                    source={require('../../Assets/images/imgsingle2.png')}
                  />
                  <Text>City IVTEC</Text>
                </View>
              </View>

            </Card>
            <Card style={{ ...styles.dashbord_view2 }}>
              {helpIcon?.map((item, index) => {
                return (
                  <View style={{ ...styles.helpView }}>
                    <Image
                      style={{ ...styles.helpIcon }}
                      source={item.image}
                    />
                    <Text numberOfLines={2} style={{ ...styles.helpIconText }}>{item.text}</Text>
                  </View>
                )
              })}

            </Card>
          </View>

        </TouchableOpacity>

        <View>
          <Image
            style={{ ...styles.helpback }}
            source={require('../../Assets/images/helpback.png')}
          />

        </View>


        <View style={{ ...styles.browser_view }}>
          <Text style={{ ...styles.browser_text1 }}>You have not placed any orders yet</Text>
          <TouchableOpacity style={{ ...styles.browser_button_View }}
            onPress={() => NavigationService.navigate("HomePage")}
          >
            <Text style={{ ...styles.browser_text2 }}>BROWSER SERVICES</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => NavigationService.navigate("HelpAndSupport")}
        >
          <Card style={{ ...styles.faq_view }}>
            <Image
              style={{ ...styles.faq_imag }}
              source={require('../../Assets/images/help.png')}
            />
            <Text style={{ ...styles.faq_text }}>
              FAQs
            </Text>
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  )
}

export default Help

const styles = StyleSheet.create({
  Main_container: {
    paddingHorizontal: moderateScale(10)
  },
  HeaderView: {
    // padding: moderateScale(15),
    borderWidth: moderateScale(0.3),
    borderColor: "#c9c5c9",
  },
  HeaderText: {
    fontFamily: FONTS.semibold,
    color: "#000",
    padding: moderateScale(15),

  },
  dashbord_view1: {
    borderWidth: moderateScale(0.2),
    height: moderateScale(80),
    marginTop: moderateScale(20),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(0),
    borderBottomRightRadius: moderateScale(0),
    borderColor: "#c9c5c9",
    justifyContent: "center",
    paddingLeft: moderateScale(10)
  },
  dashbord_view2: {
    borderWidth: moderateScale(0.2),
    height: moderateScale(120),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(0),
    borderTopRightRadius: moderateScale(0),
    borderColor: "#c9c5c9",
    justifyContent: "center",
    // alignItems:"center",
    flexDirection: "row",
    paddingHorizontal: moderateScale(5)
  },
  carImage: {
    height: moderateScale(50),
    width: "100%"
  },
  helpView: {
    alignItems: "center",
    // borderWidth: 1,
    width: "25%",
    justifyContent: "center"
  },
  helpIcon: {
    height: moderateScale(60),
    // width: "100%",
    resizeMode: "contain"
  },
  helpIconText: {
    maxWidth: "90%",
    textAlign: "center"
  },
  helpback: {
    height: moderateScale(200),
    width: "100%",
    marginTop: moderateScale(20)
  },
  browser_view: {
    padding: moderateScale(20),
    alignItems: "center"

  },
  browser_text1: {
    fontFamily: FONTS.medium,
    color: "#000",
    fontSize: moderateScale(15)
  },
  browser_button_View: {
    backgroundColor: "red",
    height: moderateScale(40),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: moderateScale(20),
    borderRadius: moderateScale(5)
  },
  browser_text2: {
    fontFamily: FONTS.semibold,
    color: "#fff",
    fontSize: moderateScale(13),
    paddingHorizontal: moderateScale(15)
  },
  faq_view: {
    // borderWidth: moderateScale(0.1),
    height: moderateScale(50),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: moderateScale(15),
    borderRadius: moderateScale(5),
    justifyContent: "flex-start",
    backgroundColor: "#fbf9fb",
    marginVertical: moderateScale(20)
  },
  faq_imag: {
    height: moderateScale(35),
    width: "20%",
    // resizeMode:"contain"

  },
  faq_text: {
    fontFamily: FONTS.medium,
    color: "#000",
    fontSize: moderateScale(13),
    paddingBottom: moderateScale(5)
  }

})