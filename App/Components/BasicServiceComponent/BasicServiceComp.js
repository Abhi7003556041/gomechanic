import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Container, RadioButton } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import MOBILmodel from './MOBILmodel'
import ReactNativeModal from 'react-native-modal'
const { width, height } = Dimensions.get('window');

const BasicServiceComp = ({SubService,func}) => {
    //map
    const Oil_data =
        [
            {
                title: "Mineral Oil1",
                milage: "MOBIL 5W30",
                dist: "EXceptional Performance Boost & More Fuel Economy",
                price: "₹ 0"

            },
            {
                title: "Mineral Oil2",
                milage: "MOBIL 5W30",
                dist: "EXceptional Performance Boost & More Fuel Economy",
                price: "₹ 0"

            },
            {
                title: "Mineral Oil3",
                milage: "MOBIL 5W30",
                dist: "EXceptional Performance Boost & More Fuel Economy",
                price: "₹ 0"

            },
        ]


    //state
    const [selected1, setSelected1] = useState(SubService?.[0]?.service_customize_id);
    const [details ,setDetails] = useState([])
    //MOBIL state
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <Container style={{ ...styles.MainContainerStyle }}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {
                SubService.length>0 ?
                SubService?.map((item, index) => {
                    return (<>
                        <View style={{ ...styles.main_View_Style }}>
                            <Card style={{ ...styles.View1_Style }}>
                                <Text style={{ ...styles.main_View_text }}>{item.option_name}</Text>
                                <Text style={{ ...styles.main_View_text2 }}
                                    // onPress={() => NavigationService.navigate("MOBILmodel")}
                                    onPress={() => { 
                                        setDetails(item)
                                        setModalVisible(true) }}

                                >{item.provided_material}</Text>
                                <Text numberOfLines={3} style={{ ...styles.main_View_text3 }}>{item.brief_details}</Text>
                            </Card>
                            <Card style={{ ...styles.View2_Style }}>
                                <Text style={{ ...styles.View3_Style }}>₹ {item.service_customize_price}</Text>
                                <RadioButton
                                    selected={selected1 == item?.service_customize_id}
                                    onChange={(val) =>{
                                        setSelected1(item?.service_customize_id)
                                        func(item?.service_customize_id,item.service_customize_price)
                                    } 
                                }
                                    size={20}
                                    activeColor="red"
                                />
                            </Card>
                        </View>
                    </>)
                })
            :null
            }

                <ReactNativeModal isVisible={isModalVisible}
                    // backdropColor={'rgba(228, 14, 104, 1)'}
                    backdropOpacity={0.4}
                    style={{
                        margin:0,
                        padding:0,
                        justifyContent: 'flex-end'
                    }}
                    onBackButtonPress={() => setModalVisible(false)}
                    onBackdropPress={() => setModalVisible(false)}
                >
                    <View style={{ height: height / 4 }}>
                        <MOBILmodel isModalVisible={isModalVisible} setModalVisible={setModalVisible} Dataa={details ?? []}/>
                    </View>

                
                </ReactNativeModal>



            </ScrollView>
            {console.log('SubService>>>>>>',SubService?.[0]?.service_customize_id)}
        </Container>
    )
}

export default BasicServiceComp

const styles = StyleSheet.create({
    MainContainerStyle: {
        flex: 0,
        paddingHorizontal: moderateScale(10)
    },
    main_View_Style: {
        padding: moderateScale(5),
        marginTop: moderateScale(10)
    },
    View1_Style: {
        height: moderateScale(120),
        width: moderateScale(155),
        padding: moderateScale(20),
        borderWidth: moderateScale(0.2),
        borderTopLeftRadius: moderateScale(5),
        borderTopRightRadius: moderateScale(5),
        borderColor: "#d2d2d2",
        borderBottomRightRadius: moderateScale(0),
        borderBottomLeftRadius: moderateScale(0),
    },
    main_View_text: {

        fontSize: moderateScale(14),
        paddingBottom: moderateScale(15),
        color: "#000"
    },
    main_View_text2: {
        fontSize: moderateScale(12),
        color: "red", textDecorationLine: "underline",
        paddingBottom: moderateScale(5),
        fontSize: moderateScale(10)
    },
    main_View_text3: {
        maxWidth: "100%",
        fontSize: moderateScale(11),
    },
    View2_Style: {
        height: moderateScale(60),
        width: moderateScale(155),
        padding: moderateScale(20),
        borderWidth: moderateScale(0.2),
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomRightRadius: moderateScale(5),
        borderBottomLeftRadius: moderateScale(5),
        borderTopLeftRadius: moderateScale(0),
        borderTopRightRadius: moderateScale(0),
        borderColor: "#d2d2d2",

    },
    View3_Style: {

        fontSize: moderateScale(14),
        color: "#000"
    }
})