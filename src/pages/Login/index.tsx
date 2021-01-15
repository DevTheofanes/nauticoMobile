import React,{ Component, useState}  from 'react'
import { View, Alert, AsyncStorage, ActivityIndicator, Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView, RecyclerViewBackedScrollViewBase, PushNotificationIOS } from 'react-native';
import { StackActions, useNavigation} from '@react-navigation/native';

import Api from '../../service/auth';


import Logo from '../../assets/logo.png';
import Backgroud from '../../assets/backgroudhome.png';
import styles from './styles';

import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import axios from 'axios';


function Login(){
    const { navigate } = useNavigation();
    const navigation = useNavigation();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const[loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

  const setToken = (token: string) => {
   if(token) {
   AsyncStorage.setItem('accessToken',token)
   axios.defaults.headers.common.Authorization = `Bearer${token}`;
} else{
   AsyncStorage.removeItem('token');
   delete axios.defaults.headers.common.Authorization;
 }
}

const hadleNavigateToSeja = async () => {
    setLoading(true)
    if(email != '' && password != ''){
        
        let json = await Api.signIn(email,password);
        if(json.token) {
            navigate('SejaBv')
        } else{
            alert('E-mail ou senha errads')
        }
    } else {
        alert( 'Preencha os campos');
    }
    setLoading(false);
}



        function hadleNavigateToRegisterPage(){
        navigate('Register')
        }

        function hadleNavigateToRecuperarPassword(){
            navigate('RecuperarPassword')
            }

    return (
        <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
       <View style={styles.main}>
           <Image style={styles.mainlogo} source={Logo} />
           <View style={styles.mainInput} >
               <TextInput style={styles.mainInputText} 
               placeholder="Usuário/E-mail"
               placeholderTextColor="#535353"
               value={email}
               autoCapitalize="none"
               keyboardType="email-address"
               underlineColorAndroid="transparent"
               autoCorrect={false}
                onChangeText={setEmail}
               />
               <TextInput style={styles.mainInputText}
               placeholder="Senha"
               placeholderTextColor="#535353"
               underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    maxLength={6}
                    secureTextEntry={true}
               value={password}
               onChangeText={setPassword}
               />
               <TouchableOpacity onPress={hadleNavigateToSeja} style={styles.mainInputButton} >
                   {loading ? (
                         <ActivityIndicator  size="small" color="#000" />
                   ) : (
                    <Text style={styles.mainInputButtonText}>Entrar</Text>
                   )}   
               </TouchableOpacity>
           </View>
       </View>
    </KeyboardAvoidingView >
    <View style={styles.footer}>
        <Text style={styles.footerText}>Desenvolvido por <Text style={styles.footerTextBold}>AgenciaRC</Text></Text>
    </View>
    </ImageBackground>
   
    </>
    )
}

export default Login;