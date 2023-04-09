const express = require('express');
const {
    uploadNotification,
    getNotification,
    deleteNotification

} = require("../controllers/notification");

const router = express.Router();

// notification
router.post('/upload',uploadNotification);
router.get('',getNotification);
router.delete('/delete',deleteNotification);

module.exports = router;
