import React, { use } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Flex,
} from '@chakra-ui/react'
import { FaRedditSquare } from 'react-icons/fa';
import Icon from '@chakra-ui/icon';
import { signOut, User } from 'firebase/auth';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { VscAccount } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineLogin } from 'react-icons/md';
import { sign } from 'crypto';
import { auth } from '@/src/firebase/clientApp';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/src/atoms/authModalAtom';



type UserMenuProps = {
    user?: User | null
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
    const setAuthModalState = useSetRecoilState(authModalState);

    return (
        <Menu>
            <MenuButton
                cursor='pointer'
                padding='0px 6px'
                borderRadius={4}
                _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
            >
                {
                    user
                        ? <Flex align='center'>
                            <Flex align='center'>
                                <>
                                    <Icon
                                        as={FaRedditSquare}
                                        fontSize={24}
                                        mr={1}
                                        color='gray.300'
                                    />
                                </>
                                <ChevronDownIcon />
                            </Flex>
                        </Flex>

                        : <Icon
                            fontSize={24}
                            color='gray.200'
                            mr={1}
                            as={VscAccount}
                        />
                }
            </MenuButton>

            <MenuList>
                {
                    user ?
                        <>
                            <MenuItem
                                fontSize='10pt'
                                fontWeight={700}
                                _hover={{ bg: 'blue.500', color: 'white' }}
                            >
                                <Flex align='center'>
                                    <Icon as={CgProfile} fontSize={20} mr={2} />
                                    Profile
                                </Flex>
                            </MenuItem>

                            <MenuItem
                                fontSize='10pt'
                                fontWeight={700}
                                _hover={{ bg: 'blue.500', color: 'white' }}
                                onClick={() => {
                                    signOut(auth);
                                }}
                            >
                                <Flex align='center'>
                                    <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
                                    Log Out
                                </Flex>
                            </MenuItem>
                        </>
                        :
                        <>
                            <MenuItem
                                fontSize='10pt'
                                fontWeight={700}
                                _hover={{ bg: 'blue.500', color: 'white' }}
                                onClick={() => setAuthModalState({ open: true, view: 'login' })}
                            >
                                <Flex align='center'>
                                    <Icon
                                        as={MdOutlineLogin}
                                        fontSize={20}
                                        mr={2}
                                    />
                                    Log In / Sign Up
                                </Flex>
                            </MenuItem>
                        </>
                }
            </MenuList>
        </Menu>
    )
}
export default UserMenu;