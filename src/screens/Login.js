import React, {useState}from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeMail = (val) => setEmail(val)
    const onChangePass = (val) => setPassword(val)
    return (
        <View style={{padding: 20}}>
            {/* <Text style={{color:'red'} }>Login</Text> */}
            <Text style={{textAlign: 'center'}}>Profile</Text>
            <Text style={{marginTop: 50}}>Email Address</Text>
            <TextInput
                style={{height: 45, width: '100%', borderWidth: 1}}
                onChangeText={onChangeMail}
                value={email}
            />

            <Text style={{marginTop: 50}}>Password</Text>
            <TextInput
                style={{height: 45, width: '100%', borderWidth: 1}}
                onChangeText={onChangePass}
                value={password}
                secureTextEntry
            />
            <TouchableOpacity style={{marginTop: 35, fontWeight: 'bold'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 35, backgroundColor: 'yellow', padding: 15,
             justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                marginTop: 20,
                 backgroundColor: '#fff',
                  padding: 15,
                  borderWidth: 1,}}>
                <Text style={{fontWeight: 'bold', fontSize: 15, textAlign:'center'}}>Join Now</Text>
            </TouchableOpacity>
        </View>
    )
}
