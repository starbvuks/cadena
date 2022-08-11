require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.gateway.pokt.network/v1/lb/62f4ae2ea99af8003b9ad3a2",
      accounts: [`${process.env.RINKEBY_ACC_URL}`],
    },
  },
  solidity: "0.8.9",
};
