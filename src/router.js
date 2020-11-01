/**
 * File: \src\router.js
 * Project: demo-software-testing
 * Created Date: Sunday, November 1st 2020, 11:01:00 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified: Sunday, November 1st 2020, 11:09:22 pm
 * Modified By: Vĩnh Phát
 * ------------------------------------
 */

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => res.send('OK'))

module.exports = router
