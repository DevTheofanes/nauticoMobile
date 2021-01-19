import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
  header: {
    marginBottom: 30,
    marginTop: "10%",
    width: "64%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerImage: {},
  headerText: {
    fontSize: 32,
    color: "#FFD246",
    fontWeight: "700",
    paddingHorizontal: 10,
  },
  mainPage: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainPageForm: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainText: {
    fontSize: 18,
    color: "#ffff",
    top: 5,
    fontWeight: "700",
  },
  mainTextInput: {
    backgroundColor: "#fff",
    width: "64%",
    // height: "100%",
    color: "#222",
    left: 10,
    marginBottom: 30,
    borderRadius: 9,
  },
  mainInputText: {
    height: 150,
    // textAlign: "left",
    textAlignVertical: "top",
    maxWidth: 300,
    marginTop: 10,
    color: "#222",
    backgroundColor: "#fff",
    paddingHorizontal: "2%",
    borderRadius: 8,
  },
  mainInputTextEsqueceuText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  mainInputButton: {
    backgroundColor: "#fff",
    width: 100,
    height: 40,
    marginBottom: 20,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  mainInputButtonText: {
    fontSize: 16,
    color: "#535353",
  },

  footer: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    marginTop: "4%",
  },

  footerImg: {
    width: 133,
    height: 70,
  },

  mainInputTextObs: {
    color: "#FFD246",
    fontWeight: "500",
    fontSize: 20,
    marginTop: "4%",
  },
});

export default styles;
