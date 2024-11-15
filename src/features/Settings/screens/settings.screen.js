import React,{useContext} from "react";
import {AuthenticationContext}  from "../../../services/authentication/authentication.context"
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;
export const SettingsScreen = ({navigation}) => {
    const { logout } = useContext(AuthenticationContext);
    
    return (
      <SafeArea>
       <List.Section>
       <SettingsItem
        title="Favourites"
        description="View your favourites"
        left={(props) => (
          <List.Icon {...props} color={colors.ui.secondary} icon="heart" />
        )}
        onPress={()=> navigation.navigate("Favourites")}
        />
        <SettingsItem
        title="Logout"
        left={(props) => (
          <List.Icon {...props} color={colors.ui.secondary} icon="door" />
        )}
        onPress={logout}
        />
            

       </List.Section>
      </SafeArea>
    );
  };