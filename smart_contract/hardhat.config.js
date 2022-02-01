
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks : {
    ropsten : {
      url : 'https://eth-ropsten.alchemyapi.io/v2/uGP6P-8wy4nb08DdEyiDfN4LFlsrS0W-',
      accounts : [ '06ab8ee89ea9878b7b235f0368b3369d86849c5b54738884d2dd6a880ae84439' ]
    }
  }
}

