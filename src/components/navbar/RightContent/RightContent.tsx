import { Button, Flex } from '@chakra-ui/react'
import { User, signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '@/src/firebase/clientApp'
import AuthModal from '../../modal/auth/AuthModal'
import AuthButtons from './AuthButtons'
import Icons from './Icons'
import UserMenu from './UserMenu'

type RightContentProps = {
  user?: User | null
}
const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  )
}

export default RightContent
