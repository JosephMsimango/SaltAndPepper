import React,{Component} from 'react';
import {StyleSheet,Modal,Text,View,TextInput, KeyboardAvoidingView,Dimensions, ImageBackground, CheckBox} from 'react-native';
import imageBackground from "../components/images/imageBackground2.jpg"
import Logo from "../components/pages/Logo";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

class LoginScreen extends Component{
    constructor(props){
        super(props);
    }
    
    
    render(){
        return(
            <ImageBackground source= {imageBackground} style = {styles.container} blurRadius = {1}>
                <View style = {{flex:1,justifyContent:"center",alignItems:"center",marginTop:50,width:"100%"}}> 
                        <Logo/>
                </View>
                <View style={{width:width,marginTop:15,alignItems:'center',paddingBottom:2}} >
                    <Text style = {{fontWeight:'bold',fontSize:25,textAlign:'center'}}>Sign Up</Text>
                    <Text style = {{textAlign:'center',marginBottom:5}}>Please fill in this form to create an account with us!</Text>
                </View>
                <KeyboardAvoidingView style = {{flex:3,}}>
                    <TextInput style = {[styles.input]} placeholder = 'Name' placeholderTextColor = 'white'/>
                    <TextInput style = {[styles.input]} placeholder = 'Surname' placeholderTextColor = 'white'/>
                    <TextInput style = {[styles.input]} placeholder = 'Email' placeholderTextColor = 'white'/>
                    <TextInput style = {[styles.input]} placeholder = 'Phone number' placeholderTextColor = 'white'/>
                    <TextInput style = {[styles.input]} placeholder = 'Password' placeholderTextColor = 'white'/>
                    <TextInput style = {[styles.input]} placeholder = 'Confirm password' placeholderTextColor = 'white'/>
                </KeyboardAvoidingView>
                <View style={{flex:0.2, flexDirection:'row',marginTop:5}}>
                        <Text style={{textAlign:'center'}}>Already have an acount? </Text>
                        <Text style = {{color:'#7EC8E7'}}>Login here</Text>
                </View>
            </ImageBackground>
        )
    }
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        width:'100%',
        height:'100%',
        justifyContent: "center",
        alignItems:'center',
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1.5,
        width: 300,
        borderRadius:25,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10,
        borderColor:'red'
    },
    button:{
        width: 300,
        backgroundColor: 'red',
        borderRadius: 25, 
        marginVertical: 10,
        paddingVertical: 15,
        alignSelf:'center'
    },
    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    check:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10
    },
    signUp:{
        flex:1,
        flexDirection:'row',
        alignSelf:'center'
    }
})

export default LoginScreen