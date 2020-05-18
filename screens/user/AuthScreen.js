import React from "react";
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Button
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import Colors from "../../constants/Colors";
const AuthScreen = props => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <LinearGradient colors={["#ffedff", "#ffe3ff"]} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id="email"
              label="Email"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorMessage="PLease enter a valid email address"
              onInputChange={() => {}}
              initialValue=""
            ></Input>
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorMessage="PLease enter a valid password"
              onInputChange={() => {}}
              initialValue=""
            ></Input>
            <View style={styles.buttonContainer}>
              <Button
                title="Login"
                color={Colors.primary}
                onPress={() => {}}
              ></Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="SignUp"
                color={Colors.accent}
                onPress={() => {}}
              ></Button>
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "Authenticate"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    marginTop: 10
  }
});
export default AuthScreen;
