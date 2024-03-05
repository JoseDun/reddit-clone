import { authModalState } from '@/src/atoms/authModalAtom'
import { auth } from '@/src/firebase/clientApp'
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import React, { useCallback, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState } from 'recoil'
import AuthInput from './AuthInput'
import OauthButtons from './OauthButtons'
import ResetPassword from './ResetPassword'

const AuthModal = () => {
  const [modalState, setModalState] = useRecoilState(authModalState)

  const handleClose = useCallback(() => {
    setModalState(prev => ({ ...prev, open: false }))
  }, [setModalState])

  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    if (user) handleClose()
    console.log(user)
  }, [user, handleClose])

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
            {modalState.view === 'signup' && 'Sign Up'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="70%"
            >
              {modalState.view === 'login' || modalState.view === 'signup' ? (
                <>
                  <OauthButtons />
                  <Text color="gray.500" fontWeight={700}>
                    OR
                  </Text>
                  <AuthInput />
                </>
              ) : (
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AuthModal
