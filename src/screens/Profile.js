import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style = {{textAlign: 'center', marginBottom: 48, fontSize: 20 }}>Profile</Text>
            </View>
            <View>
                <TouchableOpacity style = {{borderTopColor: 'black', borderWidth: 0.5, padding: 25,}}>
                    <Text style = {{fontSize: 16, fontWeight: 'bold', marginLeft: 40}}>Order Tracking</Text>
                </TouchableOpacity>
                <Icon name="credit-card" size={30} color="black" style= {{
                    position: 'absolute',
                    top: 17,
                    left: 14,
                }}/>
                <Icon name="angle-right" size={30} color="black" style= {{
                    position: 'absolute',
                    top: 17,
                    right: 14,
                }}/>
                
            </View>
            <View>
                <TouchableOpacity style = {{borderTopColor: 'black', borderWidth: 0.5, padding: 25,}}>
                    <Text style = {{fontSize: 16, fontWeight: 'bold', marginLeft: 40}}>Manage Password</Text>
                </TouchableOpacity>
                <Icon name="lock" size={30} color="black" style= {{
                    position: 'absolute',
                    top: 19,
                    left: 18,
                }}/>
                <Icon name="angle-right" size={30} color="black" style= {{
                    position: 'absolute',
                    top: 17,
                    right: 14,
                }}/>
                
            </View>
            <View>
                <TouchableOpacity style = {{borderTopColor: 'black', borderWidth: 0.5, padding: 25,}}>
                    <Text style = {{fontSize: 16, fontWeight: 'bold', marginLeft: 40}}>Address Book</Text>
                </TouchableOpacity>
                <Icon name="book" size={30} color="black" style= {{
                    position: 'absolute',
                    top: 19,
                    left: 14,
                }}/>
                <Icon name="angle-right" size={30} color="black" style= {{
                    position: 'absolute',
                    top: 17,
                    right: 14,
                }}/>
                
            </View>
            <View>
                <TouchableOpacity style = {{borderTopColor: 'black', borderWidth: 0.5, padding: 25,}}>
                    <Text style = {{fontSize: 16, fontWeight: 'bold', marginLeft: 40}}>Notifications</Text>
                </TouchableOpacity>
                <Icon name="bell" size={30} color="black" style= {{
                    position: 'absolute',
                    top: 17,
                    left: 14,
                }}/>
                <Icon name="angle-right" size={30} color="black" style= {{
                    position: 'absolute',
                    top: 17,
                    right: 14,
                }}/>
                
            </View>
            <View style={{justifyContent:'center', alignItems:'center',paddingTop: 45 }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Need Help?</Text>
                <TouchableOpacity style={{marginTop: 10, padding: 23, borderWidth: 1, width: '50%',
             justifyContent:'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 40, padding: 23, borderWidth: 1, width: '90%',
             justifyContent:'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

