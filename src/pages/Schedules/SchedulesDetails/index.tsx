import React, { useState, useEffect } from "react";
import { View, Text, Image, ImageBackground, TextInput } from "react-native";

import HeaderBack from "../../../components/HeaderBack";
import Backgroud from "../../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../../assets/logo.png";
import Grupo59 from "../../../assets/Grupo58.png";
import { useRoute } from "@react-navigation/native";

function SchedulesDetails() {
  const route: any = useRoute();
  const { schedule }: any = route.params;

  const [date, setDate] = useState("");
  const [hora, setHora] = useState("");
  const [obs, setObs] = useState("");

  async function loadData() {
    const timeZone: string = schedule.time;

    const year = timeZone.substring(0, 4);
    const mount = timeZone.substring(5, 7);
    const day = timeZone.substring(8, 10);

    const time = day + "/" + mount + "/" + year;

    // for (const letra in timeZone) {
    //   if (Object.prototype.hasOwnProperty.call(timeZone, letra)) {
    //     const element = timeZone[letra];
    //   }
    // }

    setDate(time);
    setObs(schedule.comments);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.mainPage}>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={Grupo59} />
            <Text style={styles.headerText}>Passeio Agendado</Text>
          </View>

          <View style={styles.mainPageForm}>
            <Text style={styles.mainText}>Data :</Text>

            <TextInput
              value={date}
              onChangeText={setDate}
              autoCompleteType="cc-exp-month"
              style={styles.mainTextInput}
              editable={false}
            />
          </View>

          <View style={styles.mainPageForm}>
            <Text style={styles.mainText}>Hora :</Text>
            <TextInput
              value={hora}
              onChangeText={setHora}
              editable={false}
              style={styles.mainTextInput}
            />
          </View>
          <Text style={styles.mainInputTextEsqueceuText}>
            *Agendamento com 2 dias de antecedência.
          </Text>

          <View>
            <Text style={styles.mainInputTextObs}>Obs:</Text>
            <TextInput
              value={obs}
              editable={false}
              onChangeText={setObs}
              style={styles.mainInputText}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Image style={styles.footerImg} source={Logo} />
        </View>
      </ImageBackground>
    </>
  );
}

export default SchedulesDetails;
