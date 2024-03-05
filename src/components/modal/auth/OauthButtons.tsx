import { auth } from '@/src/firebase/clientApp'
import { Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const OauthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        gap={4}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="/images/googlelogo.png"
          height="20"
          width="20"
          alt="google logo"
        />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>
      {error && (
        <Text textAlign="center" color="red" fontSize="10pt">
          {error.name}
        </Text>
      )}
    </Flex>
  )
}

export default OauthButtons
