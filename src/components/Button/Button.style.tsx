import { StyleSheet } from "react-native";
import {IStyles} from './Button'


const base_style = StyleSheet.create<IStyles>({
  container: {
    padding: 8,
    margin: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  button_container: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 17
  }
})

export default {
  primary: StyleSheet.create<IStyles>({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "purple"
    },
    title: {
      ...base_style.title,
      color: "purple"
    }
  }),
  secondary: StyleSheet.create<IStyles>({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: "purple",
    },
    title: {
      ...base_style.title,
      color: "white"
    }
  })
}