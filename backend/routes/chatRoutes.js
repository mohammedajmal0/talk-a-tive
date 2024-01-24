const express=require('express');
const { protect } = require('../middlewares/authMiddleware');
const { accessChat, fetchChats, createGroupChat,renameGroup, removeFromGroup, addToGroup } = require('../controllers/chatController');

const router=express.Router()

router.route('/').post(protect,accessChat);
router.route('/').get(protect,fetchChats);
router.post('/group',protect,createGroupChat);
router.put('/rename',protect,renameGroup);
router.put('/groupRemove',protect,removeFromGroup);
router.put('/groupAdd',protect,addToGroup);

module.exports=router;