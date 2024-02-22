import { Dimensions, Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Carousel from 'react-native-snap-carousel'

const HomeScreen = () => {
  const data = [{

    id: 1,
    imageUrl:require('../assets/banner.png')

  },
  {

    id: 2,
    imageUrl:require('../assets/banner2.png')

  },
]

  const [index,setIndex] = useState(0)
  const isCarousel = useRef(null)

  return (
    <SafeAreaView style={{ marginTop: Platform.OS == 'android' ? 25:0, flex: 1, backgroundColor: '#fff' }}>
     <View style={{ flex: 1, marginHorizontal: 15, marginVertical: 15 }}>

      <Text style={{ fontSize: 35, fontWeight: '500' }}>Uber</Text>

      <Pressable style={{ backgroundColor: '#eeeeee', marginTop: 20, padding: 12, borderRadius: 30 }}>
        <TextInput placeholder='Enter pick-up location' style={{ fontSize: 20, fontWeight: '500', marginLeft: 10 }} />
      </Pressable>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
        <Text style={{ fontWeight: '700', fontSize: 20 }}>Suggestions</Text>

        <Pressable>
          <Text style={{ fontSize: 16, marginRight: 5 }}>See all</Text>
        </Pressable>

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <View>
          <Pressable style={{ marginTop: 10, backgroundColor: '#eeeeee', borderRadius: 10, width: 80, alignItems: 'center' }}>
            <Image style={{ width: 70, height: 70 }} resizeMode='contain' source={require('../assets/uber_ride.webp')}/>
          </Pressable>

          <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 14, fontWeight: '600' }}>Trip</Text>
        </View>

        <View>
          <Pressable style={{ marginTop: 10, backgroundColor: '#eeeeee', borderRadius: 10, width: 80, alignItems: 'center' }}>
            <Image style={{ width: 80, height: 70, marginLeft: 15 }} resizeMode='cover' source={require('../assets/uber_lux_car.webp')}/>
          </Pressable>

          <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 14, fontWeight: '600' }}>Lux ride</Text>
        </View>

        <View>
          <Pressable style={{ marginTop: 10, backgroundColor: '#eeeeee', borderRadius: 10, width: 80, alignItems: 'center' }}>
            <Image style={{ width: 70, height: 70 }} resizeMode='contain' source={require('../assets/reserve 2.jpg')}/>
          </Pressable>

          <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 14, fontWeight: '600' }}>Rentals</Text>
        </View>

        <View>
          <Pressable style={{ marginTop: 10, backgroundColor: '#eeeeee', borderRadius: 10, width: 80, alignItems: 'center' }}>
            <Image style={{ width: 80, height: 70 }} resizeMode='cover' source={require('../assets/temp.webp')}/>
          </Pressable>

          <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 14, fontWeight: '600' }}>Group ride</Text>
        </View>

      </View>

      <View style={{ alignSelf: 'center', marginTop: 30 }}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={({item,index})=>(
            <Image source={item.imageUrl} style={{ width: '100%', height: 150, borderRadius: 10 }} resizeMode='cover' />
          )}
          layout='stack'
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width*0.9}
          useScrollView={true}
          automaticallyAdjustKeyboardInsets={true}
          autoplay={true}
          autoplayInterval={5000}
        />
      </View>

     </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})