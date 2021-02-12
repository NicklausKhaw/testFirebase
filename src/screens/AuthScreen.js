import React from "react";
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";

const AuthScreen = (props) => {
  return (
    <LinearGradient colors={["lightblue", "#ffe3ff"]} style={styles.gradient}>
      <View style={styles.screen}>
        <ScrollView>
          <Input
            id="email"
            label="E-mail"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorMessage="Please enter a valid email address"
            onInputChange={() => {}}
            initialValue=""
          />
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            secureTextEntry
            required
            minLength={5}
            autoCapitalize="none"
            errorMessage="Please enter a valid password"
            onInputChange={() => {}}
            initialValue=""
          />
          <View style={styles.buttonContainer}>
            <Button title="Login" onPress={() => {}} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Switch to Sign Up" onPress={() => {}} />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "Authenticate",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    padding: 50,
  },
  gradient: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default AuthScreen;
