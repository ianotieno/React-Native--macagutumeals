import React, { useState, useContext } from "react";
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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    // Simulate a 4-second loading time
    setTimeout(async () => {
      await login(email, password); // Perform the login
      setIsLoading(false);
    }, 4000); // 4000 ms = 4 seconds
  };

  return (
    <AccountBackground>
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
          <AccountCover />
          <Title> MacAgutu Meals To Go</Title>
          <AccountContainer>
            <AuthInput
              label="E-mail"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
            />
            <Spacer size="large">
              <AuthInput
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setPassword(p)}
              />
            </Spacer>

            <Spacer size="large">
              <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={handleLogin}
              >
                Login
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
