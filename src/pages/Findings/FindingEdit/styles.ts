import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },

  fieldInput: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  fieldInputText: {
    color: "#fff",
    fontSize: 18,
  },

  fieldInputTextInputNome: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 16,
    height: "100%",
    color: "#222",
    width: "62.5%",
  },

  fieldInputTextInputRg: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 16,
    height: "100%",
    color: "#222",
    width: "72%",
  },

  fieldInputTextInputObjeto: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    color: "#222",
    fontSize: 16,
    height: "100%",
    width: "79%",
  },

  forms: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    height: "70%",
  },

  containerbox: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 30,
  },

  containerboxText: {
    fontSize: 23,
    color: "#FFD246",
    fontWeight: "700",
    paddingHorizontal: 10,
  },

  footer: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
  },

  footerImg: {
    width: 133,
    height: 70,
  },

  footerTextBold: {
    fontWeight: "800",
    color: "#fff",
    fontSize: 14,
  },

  containerButtons: {
    marginHorizontal: "auto",
    flexDirection: "row",
    marginTop: "8%",
    width: "52%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ButtonSave: {
    width: 102,
    marginTop: 32,
    marginHorizontal: "auto",
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD246",
  },

  ButtonDelete: {
    width: 102,
    marginTop: 32,
    marginHorizontal: "auto",
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EE4000",
  },

  ButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
