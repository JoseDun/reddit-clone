import { auth } from "@/src/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import AuthModal from "../modal/auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <>
      <AuthModal></AuthModal>
      <Flex justify="center" align="center">
        {user ? (
          <Button onClick={() => signOut()}>LogOut</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};

export default RightContent;
