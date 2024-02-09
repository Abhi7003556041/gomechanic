import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useState,useRef,useEffect} from 'react';
import {Container, useTheme} from 'react-native-basic-elements';
import ServicePageHeader from '../../Components/Header/ServicePageHeader';
import {moderateScale} from '../../Constants/PixelRatio';
import {FONTS} from '../../Constants/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ServiceCard from '../../Components/ServicePageComp/ServiceCard';
import ServiceCard2 from '../../Components/ServicePageComp/ServiceCard2';
import KnowYourPeriodicCard from '../../Components/ServicePageComp/KnowYourPeriodicCard';
import MainService from '../../Services/MainService';
import { useSelector } from 'react-redux';
import ReactNativeModal from 'react-native-modal';
import BasicService from './BasicService';
const { width, height } = Dimensions.get('window');

const ServicePage = ({route}) => {
  const colors = useTheme();
  const { userData, carData } = useSelector((state) => state.User)

  //button State
  const [Scheduled, setScheduled] = useState(0);
  const [Loader, setLoader] = useState(true);
  const [Index, setIndex] = useState(0);
  const {CatId} = route.params
  const [allData, setAlldata] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false)

  const MonthRef = useRef(null)
  
  const GetAllService = async() => {
    console.log('data',CatId)
    MainService.FetchAllService({category_id:CatId,car_variant_id:carData.car_variant_id})
    .then((res)=>{
      console.log('FetchAllService',res)
      if(res && res.status){
        setAlldata(res.data)
        setLoader(false)
      }
      else{
        setAlldata([])
        setLoader(false)
      }
    })
    .catch((err)=>err && console.log('err',err))
  }
  useEffect(() => {
    
    if(MonthRef.current){
      MonthRef.current.scrollToIndex({
          index: Index,
          animated: true,
      })
    }
      
}, [Index])

useEffect(()=>{
  GetAllService()
},[])

if(Loader){
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", }}>
      <ActivityIndicator />
    </View>
  )
}

  return (
    <Container style={{paddingHorizontal: moderateScale(5)}}>
      <StatusBar
        backgroundColor={colors.pageBackgroundColor}
        barStyle="dark-content"
      />
      {/* ------------Header---------- */}
      <ServicePageHeader title="Periodic Services" />

      {/* ---------------------Component Change Button Start------------------------------------------ */}
      <View style={{...styles.ServiceButton_view_Style}}>
      {allData.map((res,ind)=>{
        return(
          <TouchableOpacity
          onPress={() => {
            setScheduled(ind);
            setIndex(ind)

          }}>
          <View
            style={{
              ...styles.ServiceButton_Style,
              borderColor:  Scheduled==ind ? '#1054ee' : '#b8afc7',
              backgroundColor: Scheduled==ind ? '#dae1f1' : '#fff',
            }}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: Scheduled==ind ? '#1054ee' : '#b8afc7',
              }}>
              {res.sub_category_name}
            </Text>
          </View>
        </TouchableOpacity>

        )
      })}
        
        {/* <TouchableOpacity
          onPress={() => {
            setScheduled(false);
            setBrake(true);
            setIndex(1)
          }}>
          <View
            style={{
              ...styles.ServiceButton_Style,
              borderColor: Brake ? '#1054ee' : '#b8afc7',
              backgroundColor: Brake ? '#dae1f1' : '#fff',
            }}>
            <Text
              style={{
                fontFamily: FONTS.medium,
                color: Brake ? '#1054ee' : '#b8afc7',
              }}>
              Brake Maintenance
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
      {/* ---------------------Component Change Button End------------------------------------------ */}
{console.log('lenghtht',allData.length)}
      <View
        style={{
          borderWidth: moderateScale(0.6),
          marginVertical: moderateScale(10),
          borderColor: '#eeecf4',
        }}
      />
      <FlatList
          ref={MonthRef}
          data={allData}
          
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => {
            return (
              <ServiceCard Data={item} Ind={index} len={allData.length}/>
            );
          }}
        />
   

   <ReactNativeModal isVisible={isModalVisible}
                // backdropColor={'rgba(228, 14, 104, 1)'}
                backdropOpacity={0.7}
                style={{
                    marginBottom: 0,
                    marginHorizontal: 0,
                    justifyContent: 'flex-end',
                    margin:0
                }}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
            >
                <View style={{ height: height / 2.1, }}>
                    {/* <BasicService Data={singleService}/> */}
                </View>


         
    

            </ReactNativeModal>
    
    </Container>
  );
};

export default ServicePage;

const styles = StyleSheet.create({
  ServiceButton_view_Style: {
    flexDirection: 'row',
    borderColor: '#1054ee',
  },
  ServiceButton_Style: {
    borderWidth: moderateScale(1),
    padding: moderateScale(7),
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(5),
    // borderColor: "#1054ee",
    // backgroundColor: "#dae1f1"
  },
  bannerIMG_view: {},
  bannerIMG_image: {
    width: moderateScale(330),
    height: moderateScale(150),
  },
});
