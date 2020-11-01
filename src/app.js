/**
 * File: \src\app.js
 * Project: demo-software-testing
 * Created Date: Sunday, November 1st 2020, 11:03:14 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified: Sunday, November 1st 2020, 11:03:19 pm
 * Modified By: Vĩnh Phát
 * ------------------------------------
 */

const express = require('express')

const router = require('./router')

const app = express()

app.use('/api', router)

module.exports = app
