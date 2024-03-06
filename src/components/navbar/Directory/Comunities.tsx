import Icon from '@chakra-ui/icon'
import { Flex, MenuItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import CreateComunityModal from '../../modal/CreateComunity/CreateComunityModal'

type ComunitiesProps = {}

const Comunities: React.FC<ComunitiesProps> = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <CreateComunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: 'gray.100' }}
        onClick={() => setOpen(true)}
      >
        <Flex align="center">
          <Icon fontSize={20} mr={2} as={GrAdd} />
          CreateComunity
        </Flex>
      </MenuItem>
    </>
  )
}
export default Comunities
