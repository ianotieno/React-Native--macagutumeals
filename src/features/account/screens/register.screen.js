import React, { useState, useContext } from "react";
import { Text } from "react-native";
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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

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
            <Title>Meals To Go</Title>
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
                onPress={() => onRegister(email, password, repeatedPassword, navigation)}
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
    </AccountBackground>
  );
};
