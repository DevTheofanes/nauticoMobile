import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView, ImageStore } from 'react-native';

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo59 from '../../assets/Grupo58.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

function UserPerfil(){
   const navigation = useNavigation();
   const { navigate } = useNavigation();
   const [ images,setImages ] = useState<string[]>([]);
    function hadleNavigateToCombustivelJet(){
        navigate('Avarias')
        }
    async function handlerSelectImage(){
       const { status } = await ImagePicker.requestCameraPermissionsAsync();  
       if(status !== 'granted'){
           alert('Eita, precisamos de acesso as suas fotos...');
            return;
       } 
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing:true,
            quality:1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if(result.cancelled){
            return;
        }
        const { uri:image } = result;
        setImages([...images,image])
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
               {images.map(image =>{
                     return (
                         <Image
                             key={image}
                            source={{uri:image}}
                            style={{ width: 120, height: 120,borderRadius:60 }} 
                         />
                     )
               })}
            </View>
            <TouchableOpacity onPress={handlerSelectImage}>
                     <Text  style={styles.containerboxText}>Foto</Text>
               </TouchableOpacity>
            
            <View style={styles.mainPageForm} >
                     <TextInput style={styles.mainTextInput} />
                     <TextInput  style={styles.mainTextInput} />
                     <TextInput style={styles.mainTextInput} />
                 </View>
                 <TouchableOpacity>
                 <Text style={styles.mainInputTextEsqueceuText}>EDITAR INFORMAÇÕES</Text>
                 </TouchableOpacity>
                
           </View>

                     <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default UserPerfil;