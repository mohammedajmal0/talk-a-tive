import { Drawer, DrawerContent, DrawerHeader, DrawerOverlay, Text, Tooltip } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ChatState } from '../../Context/chatProvider';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from '@chakra-ui/react';
import ProfileModal from './ProfileModal';
import { useHistory } from 'react-router-dom';
import {useDisclosure} from '@chakra-ui/hooks'
const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const {
    setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats,
  } = ChatState();
  
  const history=useHistory();
  const{isOpen,onOpen,onClose}=useDisclosure
  const logoutHandler=()=>{
    localStorage.removeItem("userInfo");
    history.push("/")
  }
  return (
    <>
      <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      width="100%"
      padding="5px 10px 5px 10px"
      borderWidth="5px"
      >
        <Tooltip label="search Users to chat" hasArrow placement='bottom-end'>
        <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text display={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
          Talk-A-Tive
        </Text>
        <div>
          <Menu>
          <MenuButton p={1}>
              
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
          </Menu>
          <Menu>
          <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>{" "}
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          {/* Additional content for searching users can be added here */}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer
