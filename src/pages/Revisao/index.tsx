import React from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo60 from '../../assets/Grupo60.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';



function Revisao(){
    const navigation = useNavigation();
    const { navigate } = useNavigation();

    function hadleNavigateToRevisaoJt(){
        navigate('RevisaoJt')
        }

        function hadleNavigateToRevisaoLancha(){
            navigate('RevisaoLancha')
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
                 <Image style={styles.containerboxImage} source={Grupo60} />
                 <Text style={styles.containerboxText} >Revisão</Text>
            </View>
            <View>
                     <Text style={styles.mainText}>
                         Escolha a sua Embarcação
                     </Text>
                 </View>
                 <TouchableOpacity onPress={hadleNavigateToRevisaoLancha} style={styles.mainInputButton} >
                         <Text style={styles.mainInputButtonText}>Lancha</Text>
                     </TouchableOpacity>
                    <TouchableOpacity onPress={hadleNavigateToRevisaoJt} style={styles.mainInputButton}>
                         <Text style={styles.mainInputButtonText}>Jet</Text>
                     </TouchableOpacity>
           </View>

                     <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default Revisao;