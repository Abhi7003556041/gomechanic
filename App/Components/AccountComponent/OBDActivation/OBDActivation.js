import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Accordion, AppButton, Container, Icon } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import BackHeader from '../../Header/BackHeader'
import { FONTS } from '../../../Constants/Fonts'
import OBDActivationChild from './OBDActivationChild'

const OBDActivation = () => {
    return (
        <Container style={{ ...styles.Container }}>
            <BackHeader title='OBD Activation' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ borderWidth: moderateScale(0.3), borderColor: "#c1c0bc" }} />
                <ImageBackground
                    style={{ height: moderateScale(160), width: "100%", marginRight: moderateScale(20), marginTop: moderateScale(20) }}
                    source={require('../../../Assets/images/obdbanner.jpg')}
                />
                <Text style={{ fontFamily: FONTS.semibold, fontSize: moderateScale(15), paddingVertical: moderateScale(15), color: "#000" }}>
                    Follow these steps to Activate your GoConnect OBD:
                </Text>


                {/* -------------------------------------------------------------- */}
                <OBDActivationChild />
                {/* -------------------------------------------------------------- */}

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: moderateScale(10) }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            style={{ height: moderateScale(35), width: moderateScale(35) }}
                            source={require('../../../Assets/images/smallchaticon.png')}
                        />
                        <View style={{ paddingLeft: moderateScale(20) }}>
                            <Text style={{ fontFamily: FONTS.bold, color: "#000" }}>For Any Queries related to this issue</Text>
                            <Text style={{ fontFamily: FONTS.regular }}>Connect with Our Chat Experts</Text>
                        </View>

                    </View>
                    <Icon
                        name="right"
                        type="AntDesign"
                        color="#c1c0bc"
                    // size={40}
                    />
                </View>
            </ScrollView>

            <AppButton
                title="SCAN QR CODE"
                textStyle={{ color: "#fff" }}
                buttonIcon={{
                    position: 'left',
                    name: 'qr-code-scanner',
                    type: 'MaterialIcon',
                    color: "#fff"
                }}
                mainContainerStyle={{width:"100%"}}
            />
        </Container>
    )
}

export default OBDActivation

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: moderateScale(10)
    },


})