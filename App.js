import React from 'react'
import { View, Text } from 'react-native'
import ProductDetail from './src/screens/ProductDetail'
import Login from './src/screens/Login'
import Profile from './src/screens/Profile'
import Product from './src/screens/Product'
import ProductList from './src/screens/ProductList'
import YourBag from './src/screens/YourBag'

export default function App() {
  console.tron.log("cccccc")
  
  return (
    <View>
     {/* <Login/> */}
     {/* <Profile/> */}
     {/* <Product/> */}
     {/* <ProductDetail/> */}
     <ProductList/>
     {/* <YourBag/> */}
    </View>
  )
}
