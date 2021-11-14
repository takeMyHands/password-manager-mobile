import React, { useEffect } from "react";
import styled from "styled-components/native";
import Fab from "../../components/shared/Fab";
import AccountList from "../../components/accounts/AccountList";
import { isShownAccountsFabVar } from "../../../apollo";
import { useReactiveVar } from "@apollo/client";
import useMe from "../../hooks/useMe";

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const AccountMainScreen = ({ navigation }) => {
  const isShown = useReactiveVar(isShownAccountsFabVar);

  useEffect(() => {
    navigation.setOptions({
      title: "Accounts",
    });
  }, []);

  const handleFabClick = () => {
    navigation.navigate("AccountCreateScreen");
  };

  return (
    <Container>
      <AccountList />

      {isShown ? <Fab onPress={handleFabClick} /> : null}
    </Container>
  );
};

export default AccountMainScreen;
