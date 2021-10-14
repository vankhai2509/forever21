import React from 'react'
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';

const {width} = Dimensions.get("window");
const height = width * 0.9;

const images = [
    'https://img.giglio.com/images/prodZoom/B89052.022_3.jpg',
    'https://img.giglio.com/images/prodZoom/B89052.022_5.jpg',
    'https://img.giglio.com/images/prodZoom/B89233.022_5.jpg',
    'https://img.giglio.com/images/prodZoom/B89233.022_1.jpg',
]
    
export default function ProductDetail() {
    const ratingCompleted = () => { }
    return (
        <SafeAreaView>
        <View style = {{marginTop: 20, width, height}}>
            <ScrollView 
             pagingEnabled
             horizontal  
             showsHorizontalScrollIndicator={false}
             style = {style.scroll}>
            {
                images.map((image, index) => (
                    <Image
                    key = {index}
                    source = {{uri: image}}
                    style = {style.image}
                    />
                ))
            }
            </ScrollView>
            <View style={style.pagination}>
                {
                    images.map((i,k) => (
                        <Text  style={style.pagingText}>⬤</Text>
                    ))
                }
                
            </View>
        </View>
        <View style={{marginTop: 25}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Twill Double-Breasted Trench Coat</Text>
            <View style={{flexDirection: 'row',alignItems: 'center' , marginVertical: 5}}>
            <Text style={{fontWeight: 'bold', fontSize:26, color:'#dc143c', marginTop: 10, marginRight: 10}}>$39.99</Text>
            <Text style={{fontWeight: 'bold', fontSize:22, color:'grey',textDecorationLine: 'line-through', marginTop: 10}}>$49.99</Text>
            <Rating
            onFinishRating={ratingCompleted}
            imageSize={20}
            style={{ paddingVertical: 8, justifyContent: 'flex-start', alignItems:'flex-start', marginTop: 8, left: 120 }}
            />
            </View>
            <Text style={{fontWeight: 'bold', fontSize:16, color:'#f08080',
            borderBottomWidth:1, borderColor: 'grey', padding: 10}}>Up to 60% Off Almost Everything </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style = {{height: 35, width: 35, backgroundColor: 'white', 
         borderRadius: 35/2,
         borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor:'#6495ed'}}>
            <View style={{height: 30, width: 30, backgroundColor: '#6495ed', borderRadius: 20}}></View>
            </View>
            <View style = {{height: 35, width: 35, backgroundColor: 'white', 
         borderRadius: 35/2,
         borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor:'#e9967a'}}>
            <View style={{height: 30, width: 30, backgroundColor: '#e9967a', borderRadius: 20}}></View>
            </View>
            <View style = {{height: 35, width: 35, backgroundColor: 'white', 
         borderRadius: 35/2,
         borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor:'#dc143c'}}>
            <View style={{height: 30, width: 30, backgroundColor: '#dc143c', borderRadius: 20}}></View>
            </View>
            </View>
        </View>
        <View style={{justifyContent:'center', alignItems:'center',paddingTop: 30 }}>
            <TouchableOpacity style={{marginTop: 10, padding: 18, width: '80%',
             justifyContent:'center', alignItems: 'center', backgroundColor: '#ffd700'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black'}}>ADDED TO BAG</Text>
                </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    scroll:{
        width,
        height
    },
    image:{
        width,
        height
    },
    pagination: {
        flexDirection: 'row', position:'absolute', bottom: -25, alignSelf: 'center'
    },
    pagingText:{
        color:'#888',
        margin: 3
    },
})