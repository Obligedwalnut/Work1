const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API 서버입니다.' });
});

module.exports = router;