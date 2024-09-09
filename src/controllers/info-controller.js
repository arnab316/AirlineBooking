const { Statuscodes } = require("http-status-codes");
const info = (req, res) => {
  res.json({
    success: true,
    msg: "Api is live",
    error: {},
    data: {},
  });
};

module.exports = {
  info: info,
};
