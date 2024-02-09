import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import { Container } from 'react-native-basic-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SpecialOffersModel from './SpecialOffersModel'
import ReactNativeModal from 'react-native-modal'
const { width, height } = Dimensions.get('window');

const SpecialOffers = () => {
    const Special_Offers = [
        {
            image: require('../../Assets/images/discount.png'),
            discount: "Get Flat 10% Off",
            dist: "Smart Discount for Smart Drivers",
        },
        {
            image: require('../../Assets/images/discount.png'),
            discount: "Get Flat 10% Off",
            dist: "Smart Discount for Smart Drivers",
        },
        {
            image: require('../../Assets/images/discount.png'),
            discount: "Get Flat 10% Off",
            dist: "Smart Discount for Smart Drivers",
        },

    ]
    //model State
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <Container>
            <Text style={{ fontFamily: FONTS.bold, paddingTop: moderateScale(20), paddingLeft: moderateScale(20) }}>Special Offers</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {Special_Offers?.map((item, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { setModalVisible(true) }}
                        >
                            <View style={{ ...styles.offerTag }}>
                                <Image
                                    style={{ height: moderateScale(30), width: moderateScale(30), marginRight: moderateScale(5) }}
                                    source={item.image}
                                />
                                <View>
                                    <Text style={{ fontFamily: FONTS.semibold, color: "#000" }}>{item.discount}</Text>
                                    <Text style={{ fontFamily: FONTS.regular }}>{item.dist}</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )
                })}


                <ReactNativeModal isVisible={isModalVisible}
                    // backdropColor={'rgba(228, 14, 104, 1)'}
                    backdropOpacity={0.4}
                    style={{
                        marginBottom: 0,
                        marginHorizontal: 0,
                        justifyContent: 'flex-end'
                    }}
                    onBackButtonPress={() => setModalVisible(false)}
                    onBackdropPress={() => setModalVisible(false)}
                >
                    <View style={{ height: height / 2.4 }}>
                        <SpecialOffersModel setModalVisible={setModalVisible} />
                    </View>
                </ReactNativeModal>

            </ScrollView>
        </Container>
    )
}

export default SpecialOffers

const styles = StyleSheet.create({
    offerTag: {
        width: moderateScale(250),
        height: moderateScale(70),
        borderWidth: moderateScale(1),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: moderateScale(10),
        borderRadius: moderateScale(10),
        borderColor: "#44bbf5",
        backgroundColor: "#effdff"
    },

})