import React,{Component} from 'react';
import {StyleSheet,Modal,Text,View,TextInput, KeyboardAvoidingView, ImageBackground, CheckBox} from 'react-native';
import Logo from "../components/pages/Logo";
import imageBackground from "../components/images/imageBackground.png"
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            rememberMe:false
        };
    }

    onCheckPressed(){
        this.setState({
            rememberMe:!this.state.rememberMe
       });
    }
    
    render(){
        return(
            <ImageBackground source= {imageBackground} style = {styles.container} blurRadius = {1}>
                <View style = {{flex:2,justifyContent:"space-evenly",alignItems:"center",marginTop:50,width:"100%"}}> 
                        <Logo/>
                </View>
                <KeyboardAvoidingView style = {{flex:3}}>
                        <TextInput style = {[styles.input]} placeholder = 'Phone number, email or username' placeholderTextColor = 'white'/>
                        <TextInput style = {[styles.input]} placeholder = 'Password' placeholderTextColor = 'white'/>
                        
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                            <TouchableOpacity onPress={()=>{this.onCheckPressed()}}>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <CheckBox value = {this.state.rememberMe} tintColors={{ true: 'red', false: 'black' }}/>
                                    <Text style = {{color:'#ffffff'}}>Remember me?</Text> 
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style = {{color:'#ffffff'}}>Forgot?</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style = {styles.button}>
                            <Text style = {styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <View style={[styles.signUp]}>
                            <Text style = {{color:"#ffffff",fontSize:16}}>To sign up click! </Text>
                            <TouchableOpacity>
                                <Text style = {{color:'#7EC8E7',fontSize:16}}>here</Text>
                            </TouchableOpacity>
                        </View>  
                </KeyboardAvoidingView>
                <View style={{flex:0.5}}>
                    <TouchableOpacity>
                        <MaterialIcons name="keyboard-arrow-up" size={35} color="white"/>
                        <Text style={{textAlign:'center'}}>Menu</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
         
        )
    }
}

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