require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/87bbdb3b5d334bf1817dd9932344a906",
      accounts: [
        "704b7ae99d63fc21aa892b20f33add207fcbaa6bb3ae2122a6015aad776574f3",
      ],
    },
  },
};
