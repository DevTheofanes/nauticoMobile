import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:32,
        paddingTop: 20 + Constants.statusBarHeight,
      },
      containerBack:{
        flexDirection:'row',
        justifyContent:'space-between'
       },
      containerbox:{
        marginBottom:30,
        marginTop:120,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      containerboxBorder:{
        borderBottomWidth:2,
        borderColor:'#9F9A9A',
        top:-20,
        width:250,
      },
      containerboxImage:{
      },
      containerboxText:{
       fontSize:23,
       color:'#FFD246',
       fontWeight:'700',
       paddingHorizontal:10,
      },
      mainPage:{
        justifyContent:'center',
        alignItems:'center',
      },
      mainText:{
        fontSize:18,
       color:'#FFD246',
       marginTop:80,
       marginBottom:10,
       fontWeight:'700',
      },
      containerPagamets:{
        flexDirection:'row',
        marginTop:16,
        marginBottom:32,
      },
      containerPagametsItem:{
       
        paddingHorizontal:16,
        paddingTop:20,
        paddingBottom:16,
        marginRight:8,
        alignItems:'center',
        justifyContent:'space-between',

        textAlign:'center'
      },
      footer:{
        justifyContent:'center',
        alignItems:'center',
        height:130,
        top:200,
      },
      footerImg:{
        width:133,
        height:70
      },
      footerTextBold:{
        fontWeight:'800',
        color:'#fff',
        fontSize:14,
      },
})

export default styles;