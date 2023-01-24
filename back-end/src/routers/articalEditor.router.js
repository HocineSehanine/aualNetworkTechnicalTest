const express = require('express');
const articalEditorController = require('../controllers/articalEditor.Controller');

const router = express.Router();

router.get('/getArticle', articalEditorController.getArticalInfo);
router.put('/updateArticle', articalEditorController.updateArticalInfo);
module.exports = router;