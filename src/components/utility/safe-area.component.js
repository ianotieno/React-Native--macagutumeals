import { Platform, StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
 padding: ${(props) => props.theme.space[3]};
  z-index: 999;
  top: 40px;
  width: 100%;
`;
