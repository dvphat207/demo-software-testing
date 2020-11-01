/**
 * File: \src\server.js
 * Project: demo-software-testing
 * Created Date: Sunday, November 1st 2020, 10:57:59 pm
 * Author: Vĩnh Phát
 * -----
 * Last Modified: Sunday, November 1st 2020, 11:11:46 pm
 * Modified By: Vĩnh Phát
 * ------------------------------------
 */

const app = require('./app')

const PORT = 3000
const server = app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`))

module.exports = server
