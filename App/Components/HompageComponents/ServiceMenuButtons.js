import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import { Image } from 'react-native';
import NavigationService from '../../Services/Navigation';
import MainService from '../../Services/MainService';
import { useSelector } from 'react-redux';

const ServiceMenuButtons = () => {
    const colors = useTheme();
    const { login_status } = useSelector(state => state.User)

    //map
    const data = [
        {
            image: require('../../Assets/images/IconService4.png'),
            title: "Periodic Services",
        },
        {
            image: require('../../Assets/images/IconService1.png'),
            title: "AC Service & Repair",
        },
        {
            image: require('../../Assets/images/IconService2.png'),
            title: "Tyre and Wheel Care",
        },
        {
            image: require('../../Assets/images/IconService3.png'),
            title: "Batteries",
        },
        {
            image: require('../../Assets/images/IconService8.png'),
            title: "Denting & painting",
        },
        {
            image: require('../../Assets/images/IconService6.png'),
            title: "Car Spa & Cleaning",
        },
        {
            image: require('../../Assets/images/IconService5.png'),
            title: "Detailing Services",
        },
        {
            image: require('../../Assets/images/IconService7.png'),
            title: "Car Inspections",
        },
        {
            image: require('../../Assets/images/IconService9.png'),
            title: "Clutch & Body Parts",
        },
        {
            image: require('../../Assets/images/IconService10.png'),
            title: "Windshield & Lights",
        },
        {
            image: require('../../Assets/images/IconService11.png'),
            title: "Suspension & Fitments",
        },
        {
            image: require('../../Assets/images/IconService12.png'),
            title: "Insurance Claims",
        },
    ]
    const [ScheduledData,setScheduledData] = useState([])
    const [ValueAddedData,setValueAddedData] = useState([])
    const [MechanicalData,setMechanicalData] = useState([])


    const GetAllServiceCat = async() => {
        MainService.FetchServiceCategory()
        .then((res)=>{
            console.log('FetchServiceCategory',res)
            if(res && res.status){
                setScheduledData(res.scheduled_data)
                setValueAddedData(res.value_added_data)
                setMechanicalData(res.mechanical_data)
            }
            else{
                setScheduledData([])
                setValueAddedData([])
                setMechanicalData([])
            }
        })
        .catch((err)=>err && console.log('err',err))
    }

    useEffect(()=>{
        GetAllServiceCat()
    },[])

    return (
        <View>
            {ScheduledData.length>0 ?
            <View>
                <Text style={{ fontFamily: FONTS.medium, color: "#000", padding: moderateScale(10) }}>Scheduled Services</Text>
                <View style={{ padding: moderateScale(10), flexDirection: "row", justifyContent: 'space-between' }}>

                    {ScheduledData.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() =>login_status ?
                                     NavigationService.navigate("ServicePage",{CatId:item.category_id})
                                     :
                                     NavigationService.navigate('Login')
                                    }
                            >
                                <View style={{ ...styles.service_View }}>
                                    <Image
                                        style={{ width: moderateScale(60), height: moderateScale(60) }}
                                        source={{uri:item.category_logo}}
                                    />
                                    <Text style={{ ...styles.service_text }}>{item.category_name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            :null
}
{ValueAddedData.length>0 ?
            <View>
                <Text style={{ fontFamily: FONTS.medium, color: "#000", padding: moderateScale(10) }}>Value Added Services</Text>
                <View style={{ padding: moderateScale(10), flexDirection: "row", justifyContent: 'space-between' }}>

                    {ValueAddedData.map((item, index) => {
                        return (
                            <TouchableOpacity
                            onPress={() =>login_status ?
                                NavigationService.navigate("ServicePage",{CatId:item.category_id})
                                :
                                NavigationService.navigate('Login')
                               }
                            >
                                <View style={{ ...styles.service_View }}>
                                    <Image
                                        style={{ width: moderateScale(60), height: moderateScale(60) }}
                                        source={{uri:item.category_logo}}
                                    />
                                    <Text style={{ ...styles.service_text }}>{item.category_name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            :null
}
{MechanicalData.length>0 ?
            <View>
                <Text style={{ fontFamily: FONTS.medium, color: "#000", padding: moderateScale(10) }}>Mechanical Repairs</Text>
                <View style={{ padding: moderateScale(10), flexDirection: "row",  }}>
                    {MechanicalData.map((item, index) => {
                        return (
                            <TouchableOpacity
                            onPress={() =>login_status ?
                                NavigationService.navigate("ServicePage",{CatId:item.category_id})
                                :
                                NavigationService.navigate('Login')
                               }
                            >
                                <View style={{ ...styles.service_View }}>
                                    <Image
                                        style={{ width: moderateScale(60), height: moderateScale(60) }}
                                        source={{uri:item.category_logo}}
                                    />
                                    <Text style={{ ...styles.service_text }}>{item.category_name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            :null
}
        </View>
    )
}

export default ServiceMenuButtons

const styles = StyleSheet.create({

    service_View: {
        width: moderateScale(78),
        height: moderateScale(110),
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: moderateScale(10),
        backgroundColor: "#fcfbfc",
        marginRight:moderateScale(5)
    },
    service_text: {
        textAlign: "center",
        fontFamily: FONTS.medium,
        fontSize: moderateScale(11)
    },

})