import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../../Constants/PixelRatio'
import { Accordion, Card, Icon } from 'react-native-basic-elements'
import { FONTS } from '../../../Constants/Fonts'

const OBDActivationChild = () => {
    const accordion = [
        {
            steps: "Srep 1",
            title: "Turn on your car's engine"
        },
        {
            steps: "Srep 2",
            title: "Turn on your car's engine"
        },
        {
            steps: "Srep 3",
            title: "Turn on your car's engine"
        },
        {
            steps: "Srep 4",
            title: "Turn on your car's engine"
        }
    ]
    return (<>
        {accordion?.map((item, index) => {
            return (<>
                <View style={{ ...styles.main_view }}>
                    <View style={{ ...styles.clip_view }}>
                        <View style={{ ...styles.clip }}>
                            <Icon
                                name="play"
                                type="AntDesign"
                                color="#c1c0bc"
                                size={40}
                            />
                        </View>
                        <View style={{ justifyContent: "center", paddingLeft: moderateScale(20) }}>
                            <Text style={{ fontFamily: FONTS.bold, color: "000", fontSize: moderateScale(15) }}>{item.steps}</Text>
                            <Text style={{ fontFamily: FONTS.regular }}>{item.title}</Text>
                        </View>
                    </View>

                    <Accordion

                        title='Instructions To Get Started'
                        containerStyle={{
                            color: "red"
                        }}
                        titleStyle={{ color: "red", fontSize: moderateScale(14) }}
                        shadow={true}
                    >


                        <View style={{ flexDirection: "row", padding: moderateScale(5) }}>
                            <Icon
                                name="dot-single"
                                type="Entypo"
                                color="#c1c0bc"
                            // size={40}
                            />
                            <Text>Start your car (Engine ON)</Text>
                        </View>
                        <View style={{ flexDirection: "row", padding: moderateScale(5) }}>
                            <Icon
                                name="dot-single"
                                type="Entypo"
                                color="#c1c0bc"
                            // size={40}
                            />
                            <Text>Make sure you are in a good network area</Text>
                        </View>

                    </Accordion>
                </View>

            </>
            )
        })}
    </>

    )
}

export default OBDActivationChild

const styles = StyleSheet.create({

    clip_view: {

        borderWidth: moderateScale(0.2),
        borderColor: "#c1c0bc",
        height: moderateScale(100),
        flexDirection: "row",
        borderTopLeftRadius: moderateScale(5),
        borderTopRightRadius: moderateScale(5)
    },
    clip: {
        // borderWidth: moderateScale(1),
        height: moderateScale(100),
        width: "30%",
        alignItems: "center",
        justifyContent: "center"
    },
    main_view: {
        borderWidth: moderateScale(0.3),
        marginBottom:moderateScale(10),
        borderRadius:moderateScale(5)

    }

})