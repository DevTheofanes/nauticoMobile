import React from 'react'
import { View, Text, Image, ImageBackground, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo63 from '../../assets/Grupo63.png';
import { Video } from 'expo-av';



function Transmissao() {
    const navigation = useNavigation();
    return (
        <>
            <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
            <View style={styles.containerBack}> 
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="arrow-left" size={24} color="#FFD246" />
            </BorderlessButton>
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="menu" size={24} color="#FFD246" />
            </BorderlessButton>
           </View>
                <View style={styles.containerbox}>
                    <Image source={Grupo63} />
                    <Text style={styles.containerboxText} >Transmissão ao vivo</Text>
                </View>
                <View style={styles.main}>
                    <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        style={{ width: 300, height: 220 }}
                    />
                </View>
                <View style={styles.footer}>
                <Image style={styles.footerImg} source={Logo} />
            </View>
            </ImageBackground>
        </>
    )
}

export default Transmissao;