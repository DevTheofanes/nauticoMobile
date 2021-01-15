import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import Api from '../../service/auth';





import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo56 from '../../assets/Grupo56.png';
import Pasta from  '../../assets/Caminho46.png';



function DdEmbarcacao(){
   const navigation = useNavigation();
   const { navigate } = useNavigation();

   const [name, setName] = useState('')
    const [proprietario, setProprietario] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState('')
    const [comprimentototal, setComprimentototal] = useState('')
    const [motor, setMotor] = useState('')
    const [combustivel, setCombustivel] = useState('')

   function hadleNavigateToAvarias(){
      navigate('Avarias')
      }
      function hadleNavigateToAchadosPerdidos(){
         navigate('AchadosPedidos')
         }
         function hadleNavigateToCheckList(){
            navigate('CheckList')
            }
      function hadleNavigateToUserPerfil(){
         navigate('UserPerfil')
         }

         const hadleNavigateToSeja = async () => {
            if(name != '' && proprietario != '' && marca != '' && modelo != '' && ano != '' && comprimentototal != '' && motor != '' && combustivel != '' ){
                
                let json = await Api.embarcação(name,
                  proprietario,
                  marca,
                  modelo,
                  ano,
                  comprimentototal,
                  motor,
                  combustivel,);
                if('') {
                    navigate('Home')
                } else{
                    alert('E-mail ou senha errads')
                }
            } else {
                alert( 'Preencha os campos');
            }
        }
         
    return (
        <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
        <View style={styles.containerBack}> 
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="arrow-left" size={24} color="#FFD246" />
            </BorderlessButton>
            <BorderlessButton  onPress={hadleNavigateToUserPerfil}>
               <Feather name="menu" size={24} color="#FFD246" />
            </BorderlessButton>
           </View>
            <View style={styles.containerbox}>
                 <Image source={Grupo56} />
                 <Text style={styles.containerboxText} >Dados da Embarcação</Text>
            </View>
            <View  style={styles.forms}>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Nome:</Text>
               <TextInput value={name}
                    onChangeText={setName}
                style={styles.mainInput1}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Proprietário:</Text>
               <TextInput 
               value={proprietario}
               onChangeText={setProprietario}
               style={styles.mainInput2}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Marca:</Text>
               <TextInput 
                value={marca}
                onChangeText={setMarca}
                style={styles.mainInput3}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Modelo:</Text>
               <TextInput 
                value={modelo}
                onChangeText={setModelo}
                style={styles.mainInput3}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Ano:</Text>
               <TextInput  
               value={ano}
               onChangeText={setAno}
               style={styles.mainInput4}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Comprimento total:</Text>
               <TextInput 
               value={comprimentototal}
               onChangeText={setComprimentototal}
               style={styles.mainInput}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Motor:</Text>
               <TextInput 
               value={motor}
               onChangeText={setMotor}
                style={styles.mainInput5}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Combustível Capacidade:</Text>
               <TextInput
               value={combustivel}
               onChangeText={setCombustivel}
               style={styles.mainInput6}/>
            </View>

            <TouchableOpacity onPress={hadleNavigateToSeja} style={styles.containerButton}>
                        <Text style={styles.containerButtonText}>Salvar</Text>
                    </TouchableOpacity>

            </View>
            <View style={styles.mainpastas}>
               <View   style={styles.mainpastas}>
               <Image source={Pasta} />
               <Text onPress={hadleNavigateToAvarias} style={styles.mainpastasText}>
                  Avarias
                  </Text>
               </View>

               <View style={styles.mainpastas}>
               <Image source={Pasta} />
                  <Text onPress={hadleNavigateToAchadosPerdidos} style={styles.mainpastasText} >
                  Achados
                  </Text>
               </View>

               <View   style={styles.mainpastas}>
               <Image source={Pasta} />
               <Text onPress={hadleNavigateToCheckList} style={styles.mainpastasText}>
               CheckList
                  </Text>
               </View>
            </View>
            <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default DdEmbarcacao;