import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ChatState } from '../Context/chatProvider'
import SideDrawer from '../components/miscellaneous/SideDrawer';
import { Box } from '@chakra-ui/react';
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox';

const ChatPage = () => {
    const {user}=ChatState();
    return (
        <div style={{width : "100%"}}>
            {user && <SideDrawer/>}
            <Box
            display="flex"
            justifyContent={'space-between'}
            width={'100%'}
            height={ '91.5vh'}
            padding={'10px'}
            >
                {user && <MyChats/>}
                {user && <ChatBox />}
            </Box>
        </div>
    )
}

export default ChatPage
