import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'

export default function Product() {
    return (
        <SafeAreaView>
            <View style={{padding: 20}}>
                <Text style={{textAlign:'center', fontSize: 18,}}>Your Wishlist</Text>
            </View>
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 14}}>Frayed Distressed Denim Shorts</Text>
            </View>
            <View style={{marginBottom: 22}}>
                <Image
                source = {require('../components/product01.jpg')}
                style = {{width: 170, height: 230, marginLeft: 14}}
                />
                <Text style={{position: 'absolute', left: 200, fontWeight:'bold'}}>SKU#: 2000431903</Text>
                <TouchableOpacity style=
                {{position:'absolute'
                , top: 150, right: 20, padding: 9, borderWidth: 1, backgroundColor: '#f5fffa'}}>
                    <Text style = {{fontWeight: 'bold', color: 'black'}}>Remove from Wishlist</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 14}}>Ribbed Notched Blazer</Text>
            </View>
            <View>
                <Image
                source = {require('../components/product02.jpg')}
                style = {{width: 170, height: 230, marginLeft: 14}}
                />
                <Text style={{position: 'absolute', left: 200, fontSize: 18, fontWeight:'bold', color: 'black'}}>$31.99</Text>
                <Text style={{position: 'absolute', left: 200,top: 23 , fontWeight:'bold'}}>SKU#: 2000443147031</Text>
                <Text style={{position: 'absolute', left: 200,top: 40 , fontWeight:'bold'}}>Color: CAMEL</Text>
                <Text style={{position: 'absolute', left: 200,top: 57 , fontWeight:'bold'}}>Size: XS</Text>
                <TouchableOpacity style=
                {{position:'absolute'
                , top: 150, right: 20, padding: 9, borderWidth: 1, backgroundColor: '#f5fffa'}}>
                    <Text style = {{fontWeight: 'bold', color: 'black'}}>Remove from Wishlist</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
