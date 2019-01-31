const express = require("express");
const app = express();
app.use('/static', express.static('public'));

//監聽端口
app.listen(3002, function () {
    console.log("server listen at port 3001")
})