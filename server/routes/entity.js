const express = require('express');
const { getEntity } = require('../controllers/entity.js');

const router = express.Router();

router.get('/', getEntity);

exports.entityRouter = router;