import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './Input.style'

interface IProp {
  placeholder: string
  onType?: (text: string) => void
}

const Input = ({placeholder, onType}: IProp) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input}  onChangeText={onType} />
    </View>
  )
}

export default Input
