import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../modal/auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  // user: any;
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal></AuthModal>
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;