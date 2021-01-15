import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';


import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo59 from '../../assets/Grupo59.png';
import Codigo from '../../assets/Grupo160.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../service/iugu';


function Pagamentos(){
    const navigation = useNavigation();
    const { navigate } = useNavigation();



        function hadleNavigateToPagFatura(){
            navigate('PagePag')
            }
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
           <View style={styles.mainPage}>
           <View style={styles.containerbox}>
                 <Image style={styles.containerboxImage} source={Grupo59} />
                 <Text style={styles.containerboxText} >Pagamentos</Text>
            </View>
            <View style={styles.containerboxBorder}></View>
           </View>

           <View style={styles.containerPagamets}>
               <View style={styles.containerPagametsItem} >
                 <Image width={300} source={Codigo} />
               </View>
                <View style={styles.containerPagametsItem} >
                    <Text>Vencimento</Text>
                    <Text>05/10/2020</Text>
                </View>
                 <TouchableOpacity onPress={hadleNavigateToPagFatura}  style={styles.containerPagametsItem} >
                 <Text>Em atraso</Text>
                 </TouchableOpacity>
           </View>

                     <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default Pagamentos;