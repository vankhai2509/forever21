import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function YourBag() {
    return (
        <View>
            <View style={{
                padding:20,
                height:65,
                backgroundColor:'black'
                }}>
                 <Icon name="shipping-fast" size={26} color="white" style= {{
                    position: 'absolute', zIndex: 1, top: 21, left: 27
                }}/>
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                }}>You've Earned Free Shipping</Text>
            </View>
            <View style={{
                padding:18,
                margin:10,
                borderRadius: 1,
                borderWidth:1,
                borderColor:'red'
            
                }}>
                <Text style={{
                    color: 'red',
                    fontWeight:'bold',
                    fontSize:18
                }}>
                    Remove 1 unavailable item to continue.
                </Text>
                <TouchableOpacity style={{
                    backgroundColor: 'red',
                    height:30,
                    width:120,
                    justifyContent:'center',
                    
                }}>
                    <Text style={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize:18,
                        textAlign: 'center'
                    }}>
                        Remove All
                    </Text>
                </TouchableOpacity>
                <View style={{
                    padding:20,
                    marginTop:30,
                    borderRadius: 1,
                    borderWidth:1,
                    borderColor:'red'
                }}>
                    <Text style={{
                        color: 'red',
                        fontWeight:'bold',
                        fontSize:18

                    }}>
                        Remove unavailable item to continue.
                    </Text>
                    <TouchableOpacity style={{
                    backgroundColor: 'red',
                    height:30,
                    width:120,
                    justifyContent:'center',
                    
                }}>
                    <Text style={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize:18,
                        textAlign: 'center'
                    }}>
                        Remove Item
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        marginTop:15,
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        
                    }}
                />
                <Text style={{
                    color: 'black',
                    textAlign:  'center',
                    fontSize:16

                }}>WESC Let's Get Weird Graphic Tee</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex: 1}}>
                        <Image style={{
                            width: 140,
                            height:240,
                            marginTop:10,
                        }} source={require('../components/product01.jpg')}/>
                    </View>
                    <View style={{flex: 1}}>
                    <View style={{ flexDirection: 'row', alignItems:'center',
                        justifyContent:'center',
                        textAlign: 'left',
                        marginTop:20
                    }}><Text style={{
                        fontSize:20, 
                        color:'red',
                        fontWeight: 'bold', marginRight: 5}}>$32.00</Text>
                        <Text style={{textDecorationLine: 'line-through', fontSize: 18
                        }}>$72.00</Text>
                        </View>
                    <Text style={{
                        color: 'black',
                        textAlign:  'left',
                        justifyContent: 'center',
                        marginTop:10
                    }}>SKU#: <Text style={{fontWeight:'bold'}}>012123401</Text></Text>
                    <Text style={{
                        color: 'black',
                        textAlign:  'left',
                        justifyContent: 'center',
                    }}>Color: <Text style={{fontWeight:'bold'}}>CAMEL</Text></Text>
                    <Text style={{
                        color: 'black',
                        textAlign:  'left',
                        justifyContent: 'center',
                    }}>Size: <Text style={{fontWeight:'bold'}}>XL</Text></Text>
                    <View style={{flexDirection: 'row', marginLeft: 18}}>
                        <Ionicons name="warning-outline" size={22} color="red" style={{
                            top: 48, right: 4
                        }} />
                         <Text style={{
                        color:'red',
                        marginTop:50,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 15
                    }}>Out of stock</Text>
                    </View>
                   
                    </View>
                </View>
                </View>
            </View>
            <TouchableOpacity style={{
                width: '90%',
                alignSelf: 'center',
                borderRadius: 1,
                backgroundColor: '#eff538',
                justifyContent:'center',
                alignItems: 'center',
                padding:18
            }}>
                <Text style={{
                    color: 'black',
                    fontSize:20,
                    fontWeight:'bold'
                }}>
                    PROCEED TO CHECKOUT
                </Text>
            </TouchableOpacity>
        </View>


    )
}
