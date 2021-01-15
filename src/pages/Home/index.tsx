import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

import Backgroud from '../../assets/backgroudmenu.png';
import Grupo56 from '../../assets/Grupo56.png';
import Grupo59 from '../../assets/Grupo59.png';
import Grupo58 from '../../assets/Grupo58.png';
import Grupo122 from '../../assets/Grupo122.png';
import Grupo151 from '../../assets/Grupo151.png';
import Grupo63 from '../../assets/Grupo63.png';
import Grupo60 from '../../assets/Grupo60.png';
import Grupo139 from '../../assets/Grupo139.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Menu from '../../components/Menu';

function Home() {
    const { navigate } = useNavigation();

    function hadleNavigateToDdEmbarcacao() {
        navigate('DdEmbarcacao')
    }

    function hadleNavigateToUserPerfil() {
        navigate('UserPerfil')
    }

    function hadleNavigateToDdJetSki() {
        navigate('DdJetSki')
    }
    function hadleNavigateToRevisao() {
        navigate('Revisao')
    }
    function hadleNavigateToTransmissao() {
        navigate('Transmissao')
    }

    function hadleNavigateToCombustivel() {
        navigate('Combustivel')
    }

    function hadleNavigateToPagamentos() {
        navigate('Pagamentos')
    }

    function hadleNavigateToAgendamentoPass() {
        navigate('AgendamentoPass')
    }

    return (
        <>
            <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
               
                <View style={{marginTop:40}} >
                     {/* menu1 */}
                <View style={styles.Viewmenu}>
                    <TouchableOpacity style={styles.item} onPress={hadleNavigateToDdEmbarcacao}>
                        <Image source={Grupo56} />
                        <Text style={styles.itemTitle}>Dados da Embarcação</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={hadleNavigateToPagamentos} style={styles.item}>
                        <Image source={Grupo59} />
                        <Text style={styles.itemTitle}>Pagamentos</Text>
                    </TouchableOpacity>
                </View>

                {/* menu2 */}
                <View style={styles.Viewmenu}>
                    <TouchableOpacity onPress={hadleNavigateToAgendamentoPass} style={styles.item}>
                        <Image source={Grupo58} />
                        <Text style={styles.itemTitle}>Agendamento de Passeios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={hadleNavigateToCombustivel} style={styles.item}>
                        <Image source={Grupo122} />
                        <Text style={styles.itemTitle}>Combustível / Hora Motor</Text>
                    </TouchableOpacity>
                </View>


                {/* menu3 */}
                <View style={styles.Viewmenu}>
                    <TouchableOpacity style={styles.item}>
                        <Image source={Grupo151} />
                        <Text style={styles.itemTitle}>Perfil do Usuario</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={hadleNavigateToTransmissao} >
                        <Image source={Grupo63} />
                        <Text style={styles.itemTitle}>Transmissão ao vivo</Text>
                    </TouchableOpacity>

                </View>

                {/* menu4 */}
                <View style={styles.Viewmenu}>
                    <TouchableOpacity style={styles.item} onPress={hadleNavigateToRevisao}>
                        <Image source={Grupo60} />
                        <Text style={styles.itemTitle}>Revisão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={hadleNavigateToDdJetSki}>
                        <Image source={Grupo139} />
                        <Text style={styles.itemTitle}>Dados do Jet Ski</Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={styles.footer}>
                    <Image style={styles.footerImg} source={Logo} />
                </View>
            </ImageBackground>
        </>
    )
}

export default Home;