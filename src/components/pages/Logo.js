import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,Image} from 'react-native';

class Logo extends Component{
    render(){
        return(
            <Image style = {{width: 150, height: 170,marginLeft:15}} source= {require('../images/imageLogo.png')}/>
        )
    }
}

export default Logo