import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { Text, Button, Input, Icon } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <>
        <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({email, password})} />
      </Spacer>
      </>
    )
    
}


const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
      }
})
export default AuthForm;