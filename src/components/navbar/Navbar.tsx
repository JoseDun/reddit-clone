import { auth } from '@/src/firebase/clientApp'
import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import SearchInput from '../navbar/SearchInput'
import Directory from './Directory/Directory'
import RightContent from './RightContent/RightContent'

/* interface NavbarProps {

}
 */
const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth)
  return (
    <div>
      <Flex
        bg="white"
        height="44px"
        padding="6px 12px"
        justify={{ md: 'space-between' }}
      >
        <Flex
          align="center"
          width={{ base: '40px', md: 'auto' }}
          mr={{ base: 0, md: 2 }}
        >
          <Image
            src="/images/redditFace.svg"
            height="30"
            width="30"
            alt="reddit"
          />
          <Box display={{ base: 'none', md: 'unset' }}>
            <Image
              src="/images/redditText.svg"
              height="46"
              width="46"
              alt="reddit"
            />
          </Box>
        </Flex>
        {user && <Directory />}
        <SearchInput user={user} />
        <RightContent user={user} />
      </Flex>
    </div>
  )
}

export default Navbar
