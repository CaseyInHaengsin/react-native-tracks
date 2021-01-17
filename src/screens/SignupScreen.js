import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Signup Screen</Text>
      </Spacer>
      <Input label="Email"
        value={email} 
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        rightIcon={
          <Icon 
            type="feather"
            name="eye"
          />
        }
      />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
      
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250

  }
  
})

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;

