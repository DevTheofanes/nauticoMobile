import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import HeaderBackEdit from "../../../components/HeaderBackEdit";
import styles from "./styles";
import Backgroud from "../../../assets/backgroudmenu.png";
import Logo from "../../../assets/logo.png";

function UserPerfil() {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { user }: any = route.params;

  const [cargo, setCargo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function loadUserData() {
    console.log(user);
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    if (!user.employee && user.master) {
      setCargo("Administrator");
    }

    if (user.employee && !user.master) {
      setCargo("Funcionario");
    }

    if (!user.employee && !user.master) {
      setCargo("Cliente");
    }
  }

  React.useEffect(() => {
    console.log("Effect");
    console.log(user);
    loadUserData();
    console.log(cargo);
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBackEdit />

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Infomações do usuário</Text>
        </View>

        <View style={styles.mainPageForm}>
          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Cargo:</Text>
            <TextInput
              value={cargo}
              editable={false}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Nome:</Text>
            <TextInput
              value={name}
              editable={false}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Email:</Text>
            <TextInput
              value={email}
              editable={false}
              style={styles.fieldInputTextInputNome}
            />
          </View>

          <View style={styles.fieldInput}>
            <Text style={styles.fieldInputText}>Telefone:</Text>
            <TextInput
              value={phone}
              editable={false}
              style={styles.fieldInputTextInputNome}
            />
          </View>
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity
            onPress={() => navigate("RecoveryPassword")}
            style={styles.ButtonChangePassword}
          >
            <Text style={styles.ButtonText}>Resgatar senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonDelete}>
            <Text style={styles.ButtonText}>Apagar conta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default UserPerfil;
