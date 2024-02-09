import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Accordion, Card, Container, Icon } from 'react-native-basic-elements'
import { moderateScale } from '../../../Constants/PixelRatio'
import BackHeader from '../../Header/BackHeader'
import { FONTS } from '../../../Constants/Fonts'
import GoMoneyFAQ from '../GoMoneyFAQ/GoMoneyFAQ'
import NavigationService from '../../../Services/Navigation'


const GoAppMoney = () => {
    const data =
        [
            {
                title: "Offer Expired",
                date: "07 September 2023",
                expire: "07 September 2023",
                price: "-1500",
                status: "Expired"
            },
            {
                title: "Salary Day Sale",
                date: "07 September 2023",
                expire: "07 September 2023",
                price: "-1500",
                status: "Expired"
            },
            {
                title: "Sign Up Credit",
                date: "07 September 2023",
                expire: "07 September 2023",
                price: "-1500",
                status: "Expired"
            },
        ]
    return (
        <Container style={{ ...styles.Container }}>
            <BackHeader title='GoApp Money' />
            <TouchableOpacity
                onPress={() => NavigationService.navigate("Referral")}
            >
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: moderateScale(5), paddingTop: moderateScale(10) }}>
                    <Image
                        style={{ height: moderateScale(35), width: moderateScale(35) }}
                        source={require('../../../Assets/images/gifticon.png')}
                    />

                    <View>
                        <Text style={{ fontFamily: FONTS.bold }}>Refer And Earn</Text>
                        <Text style={{ fontFamily: FONTS.regular }}>Guaranteed reward for every referral</Text>
                    </View>
                    <Icon
                        name="right"
                        type="AntDesign"
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => NavigationService.navigate("ReferPage")}
            >
                <Card style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: moderateScale(5), marginTop: moderateScale(25) }}>
                    <View style={{ flexDirection: "row" }}>

                        <Image
                            style={{ height: moderateScale(35), width: moderateScale(35), marginRight: moderateScale(20) }}
                            source={require('../../../Assets/images/googleicon.png')}
                        />

                        <View>
                            <Text style={{ fontFamily: FONTS.bold }}>GoApp Money</Text>
                            <Text style={{ fontFamily: FONTS.regular }}>₹ 1000</Text>
                        </View>
                    </View>

                </Card>
            </TouchableOpacity>
            <Accordion
                title="Frequently Asked Questions"
                containerStyle={
                    {
                        marginVertical: moderateScale(20),
                    }
                }
                titleStyle={{ fontSize: moderateScale(12), fontFamily: FONTS.medium }}
                shadow={true}>
                <GoMoneyFAQ />
            </Accordion>


            <Text style={{ fontFamily: FONTS.bold, color: "#000", padding: moderateScale(10) }}>Wallet Activity</Text>
            {data?.map((item, index) => {
                return (
                    <Card style={{ paddingVertical: moderateScale(20) }}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: moderateScale(15) }}>
                            <View>
                                <Text style={{ fontFamily: FONTS.bold, color: "#000", fontSize: moderateScale(15), paddingBottom: moderateScale(5) }}>{item.title}</Text>
                                <Text style={{ fontFamily: FONTS.regular }}>{item.date}</Text>
                                <Text style={{ fontFamily: FONTS.regular }}>Expires On:{item.expire} </Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: FONTS.bold, color: "#ded69a", fontSize: moderateScale(15) }}>{item.price}</Text>
                                <Text style={{ fontFamily: FONTS.regular }}>{item.status}</Text>
                            </View>
                        </View>
                    </Card>
                )
            })}
        </Container>
    )
}

export default GoAppMoney

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: moderateScale(10)
    }

})