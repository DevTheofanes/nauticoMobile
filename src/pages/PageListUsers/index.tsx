import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import api from  '../../service/api';





import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo56 from '../../assets/Grupo56.png';
import Pasta from  '../../assets/Caminho46.png';



function PageListUsers(){
   const navigation = useNavigation();
   const { navigate } = useNavigation();


      function hadleNavigateToUserPerfil(){
         navigate('UserPerfil')
         }

         function hadleNavigateToEmbarcacao(){
          navigate('DdEmbarcacao')
          }
   
   
    return (
        <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
        <View style={styles.containerBack}> 
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="log-out" size={24} color="#FFD246" />
            </BorderlessButton>
            <BorderlessButton  onPress={hadleNavigateToUserPerfil}>
               <Feather name="menu" size={24} color="#FFD246" />
            </BorderlessButton>
           </View>
            <View style={styles.containerbox}>
                 <Image source={Grupo56} />
            </View>

            <View style={{backgroundColor:'#fff',width:364,height:123, borderRadius:8}}>
              <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginTop:10,paddingHorizontal:20}} >
                <Text style={{fontSize:11,color:'#000'}} >PROPRIETÁRIO:RODRIGO</Text>
                <View style={{backgroundColor:'#FFD246',width:102,height:28,justifyContent:'center',alignItems:'center',borderRadius:8}} >
                  <Text style={{fontSize:11,color:'#000',fontWeight:'bold'}}>JETSKI</Text>
                </View>
              </View>
              <View style={{alignItems:'center',marginTop:10,paddingHorizontal:20,justifyContent:'space-between',flexDirection:'row'}}>
              <Text style={{fontSize:11,color:'#000'}} >MARCA:HONDA</Text>
              <Text style={{fontSize:11,color:'#000'}} ></Text>
              </View>
              <View style={{alignItems:'center',marginTop:10,paddingHorizontal:20,justifyContent:'space-between',flexDirection:'row'}}>
              <Text style={{fontSize:11,color:'#000'}} >MODELO</Text>
              <Text style={{fontSize:11,color:'#000',marginRight:5}} >ANO: 2012</Text>
              </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={hadleNavigateToEmbarcacao}  style={styles.containerButton}>
                         <Feather name="plus" size={24} color="#000" />
                        <Text style={styles.containerButtonText}>CADASTRAR NOVA USUARIO</Text>
                    </TouchableOpacity>
            </View>
          
            <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default PageListUsers;