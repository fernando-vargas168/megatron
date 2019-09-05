const defaultConfig = require("./site-config-default.yml");

const customConfig = require("./site-config-custom.yml");
let config = defaultConfig;
if (customConfig) {
  if (!customConfig.default) {
    config = customConfig;
  }
}
module.exports = config;
