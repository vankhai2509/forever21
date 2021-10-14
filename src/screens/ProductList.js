import { Row } from 'native-base';
import React from 'react'
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity  } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window');

// const products = Array(20).fill('').map((e,i) => ({
//     id: i,
//     name: `Baggy Jean 1123312312412312312 ${i+1}`,
//     price: 12.99,
//     discountPrice: 10.39,
//     saleDetail: 'Up To 60% Off Almost Everything',
//     rate: 5
// }))
const products = [
    {
    id: 1,
    name: `Baggy Jean 1123312312412312312 `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up To 60% Off Almost Everything',
    rate: 5,
    photo: 'https://luvinus.com/wp-content/uploads/2019/10/cach-phoi-do-voi-quan-baggy-nam-10.jpg'
    },
    {
    id: 2,
    name: `Baggy Jean 1123312312412312312 `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up To 60% Off Almost Everything',
    rate: 5,
     photo: 'https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87030562_TM-99999999_01.jpg?ts=1605789273767&imwidth=412&imdensity=2'
    },
    {
    id: 3,
    name: `Baggy Jean 1123312312412312312 `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up To 60% Off Almost Everything',
    rate: 5,
     photo: 'https://luvinus.com/wp-content/uploads/2019/10/cach-phoi-do-voi-quan-baggy-nam-10.jpg'
    },
    {
    id: 4,
    name: `Baggy Jean 1123312312412312312 `,
    price: 12.99,
    discountPrice: 10.39,
    saleDetail: 'Up To 60% Off Almost Everything',
    rate: 5,
     photo: 'https://st.mngbcn.com/rcs/pics/static/T8/fotos/outfit/S20/87030562_TM-99999999_01.jpg?ts=1605789273767&imwidth=412&imdensity=2'
    },
]
export default function ProductList() {
    const ratingCompleted = () => { }

    const renderItem = ({ item }) => (
    <View style={{width: width/2 - 10}}>
        <View>
        <TouchableOpacity style={{position: 'absolute', top: 10, right: 10, zIndex: 1, color: 'black'
        , backgroundColor: 'white', padding: 5, borderRadius: 20 }}>
            <Ionicons name="heart-outline" size={25} color="black" />
        </TouchableOpacity>
            
        <Image
        style={{height: 400, width: '100%',}}
        source={{
          uri: item?.photo
        }}
      />
        </View>
        
      <View style = {{padding: 10}}>
        <View style = {{height: 25, width: 25, backgroundColor: 'white', 
         borderRadius: 25/2,
         borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor:'#6495ed'}}>
            <View style={{height: 20, width: 20, backgroundColor: '#6495ed', borderRadius: 10}}></View>
        </View>
          <Text style={{fontWeight: '700'}}>{item?.name}</Text>
          <View style = {{flexDirection: 'row', alignItems: 'center' , marginVertical: 5}}>
              <Text style={{fontWeight: '700', marginRight: 5, fontSize: 18, color: '#e60712'}}>${item?.discountPrice}</Text>
              <Text style={{fontWeight: '700', fontSize: 16, textDecorationLine: 'line-through'}}>${item?.price}</Text>
          </View>
          <Text style = {{color: 'red' ,fontSize: 14, lineHeight: 20 }}>{item?.saleDetail}</Text>
          <Rating
            onFinishRating={ratingCompleted}
            imageSize={20}
            style={{ paddingVertical: 8, justifyContent: 'flex-start', alignItems:'flex-start' }}
            />
      </View>
    </View>
  );
    return (
        
        <View>
            {/* <Text>Productlist</Text> */}
            
            <View style={{flexDirection:'row', paddingVertical: 9}}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center', borderRightWidth: 1, borderColor:'grey'}}>
                    <Text>Sort By:</Text>
                    <Text style={{fontWeight: 'bold'}}>Relevance</Text>
                </View>
                <View style={{flex: 1,flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Ionicons name="options-outline" size={26} color="black" />
                    <Text style={{marginLeft: 6}}>Filter</Text>
                </View>
            </View>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns = {2}
                horizontal={false}
                style = {{marginBottom: 120}}
                columnWrapperStyle = {{
                    flex: 1,
                    justifyContent: "space-around"
                }}
            />
        </View>
    )
}
