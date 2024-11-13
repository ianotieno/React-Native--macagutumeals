import React, { useState, useContext } from "react";
import { Text } from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts'
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  LoadingContainer,
  Loading,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";


export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  const handleRegister = () => {
    onRegister(email, password, repeatedPassword, () => {
      setShowAlert(true); // Show the alert on successful registration
    });
  };

  const handleAlertConfirm = () => {
    setShowAlert(false); // Hide alert
    navigation.navigate("Login"); // Navigate to Login screen
  };

  return (
    <AccountBackground>
      <AccountCover />

      {isLoading ? (
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            theme={{ colors: { primary: "tomato" } }}
          />
        </LoadingContainer>
      ) : (
        <>
          <AccountContainer>
            <Title>MacAgutu Meals To Go</Title>
            <AuthInput
              label="E-mail"
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
            />
            <Spacer size="large">
              <AuthInput
                label="Password"
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setPassword(p)}
              />
            </Spacer>
            <Spacer size="large">
              <AuthInput
                label="Repeat Password"
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setRepeatedPassword(p)}
              />
            </Spacer>
            {error && (
              <Text style={{ color: "red" }}>{error}</Text>
            )}
            <Spacer size="large">
              <AuthButton
                icon="email"
                mode="contained"
                onPress={handleRegister}
              >
                Register
              </AuthButton>
            </Spacer>
          </AccountContainer>
          <Spacer size="large">
            <AuthButton mode="contained" onPress={() => navigation.goBack()}>
              Back
            </AuthButton>
          </Spacer>
        </>
      )}

      <AwesomeAlert
      show={showAlert}
      showProgress={false}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showConfirmButton={true}
      confirmText="OK"
      confirmButtonColor="#696AC3"
      onConfirmPressed={handleAlertConfirm}
      customView={
        <View style={{ alignItems: "center" }}>
          <Icon
            name="check-circle"   // Choose the icon
            size={50}              // Icon size
            color="#696AC3"        // Icon color
            style={{ marginBottom: 10 }}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", marginBottom: 5 }}>
            Registration Successful
          </Text>
          <Text>
          A verification email has been sent. Please verify to log in.
          </Text>
        </View>
      }
     
    />
    </AccountBackground>
  );
};
