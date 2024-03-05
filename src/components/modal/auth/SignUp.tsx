import { authModalState } from '@/src/atoms/authModalAtom'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/src/firebase/clientApp'
import { FIREBASE_ERRORS } from '@/src/firebase/errors'

type LoginProps = {}

const SignUp: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const [createUserWithEmailAndPassword, user, loading, useError] =
    useCreateUserWithEmailAndPassword(auth)

  //* firebase logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (error) setError('')

    if (signUpForm.confirmPassword !== signUpForm.password) {
      setError('Password error')
      return
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //* update form state
    setSignUpForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="name@email.com"
        type="email"
        mb={2}
        onChange={onChange}
        required
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500'
        }}
        bg="gray.50"
      />

      <Input
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        onChange={onChange}
        required
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500'
        }}
        bg="gray.50"
      />

      <Input
        name="confirmPassword"
        placeholder="Confirm password"
        type="password"
        mb={2}
        onChange={onChange}
        required
        fontSize="10pt"
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500'
        }}
        bg="gray.50"
      />
      {(error || useError) && (
        <Text textAlign="center" color="red" fontSize="10pt">
          {error ||
            FIREBASE_ERRORS[useError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Button
        width="100%"
        height="36px"
        my={2}
        type="submit"
        isLoading={loading}
      >
        Sign Up
      </Button>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Alredy a redittor?</Text>

        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState(prev => ({ ...prev, view: 'login' }))
          }
        >
          Log In
        </Text>
      </Flex>
    </form>
  )
}

export default SignUp
