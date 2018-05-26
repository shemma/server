var localtunnel = require("localtunnel");

localtunnel(5000, { subdomain: "InsertYourSubDomain" }, function(err, tunnel) {
  console.log("LT running");
});
