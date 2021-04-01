const express = require("express");
const urllib = require("urllib");
const app = express();
const config = require("./config.js");

app.get("/api/users", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.headers);
  urllib.request(
    "https://www.yuque.com/api/v2/user",
    {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "chrome-extension-demo",
        "X-Auth-Token": config.x_auth_token,
      },
    },
    (err, data, response) => {
      // console.log(err, data, response);
      res.json({ success: response.data.toString() });
    }
  );
});

app.listen(3002, function () {
  console.log("服务启动成功，端口3002");
});
