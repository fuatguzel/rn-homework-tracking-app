import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './Login.style'

import Input from '../../../components/Input'
import Button from '../../../components/Button'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="e-mail"  />
      <Input placeholder="password"  />
      <Button text="Login" />  
      <Button text="Sign Up" />  
    </SafeAreaView>
  )
}

export default Login
