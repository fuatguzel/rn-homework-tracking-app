import React from 'react';
import {
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
  TextStyle,
  StyleProp,
  ActivityIndicator,
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Button.style';

export interface IProps {
  onPress?: () => void;
  text: string;
  loading?: boolean;
  style?: any;
  icon?: string;
  theme?: StyleProp<TextStyle>;
}

export interface IStyles {
  container: ViewStyle;
  button_container: ViewStyle;
  title: TextStyle;
  base_style: ViewStyle;
}
//, theme="primary"
const Button = ({text, onPress, loading, icon}: IProps) => {
  return (
    <TouchableOpacity
      style={{
        padding: 8,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "purple"
      }}
      //style={styles[theme].container}
      onPress={onPress}
      disabled={loading}
      {...(loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View
          style={{flexDirection: 'row', alignItems: 'center'}}
          //style={styles[theme].button_container}
        >
          {/* <Icon name="icon" color="white" size={18} /> */}
          <Text
            style={{ marginLeft: 5,
              fontWeight: 'bold',
              fontSize: 17, color: 'black'}}
          //  style={styles[theme].title}
          >
            {text}
          </Text>
        </View>
      ))}></TouchableOpacity>
  );
};

export default Button;
