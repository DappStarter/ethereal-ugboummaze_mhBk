require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remind provide give knife forget swim'; 
let testAccounts = [
"0xe6120a2b284e07ce4d06f871c3a5e7db8179733397a2646012b077a616bed480",
"0x90996f40b6fd3c37894d6abacfe9a8c85eb321a24cd4adb1efae76dfcadc2ec7",
"0x95cd205da9e57c82d73da70523d0a7548e820069e4a943b5d0a4cc1df5a80312",
"0xb204947a47b4859ab150e5d8523d6b5779102f898f873846ae34d5126bc91cd9",
"0x84cc3d939435dd216534aa2a891c963e4197b3d5436b04ae008a6c85a68f77f6",
"0xd9aa1fbf81faf33dd686c74673b8719631046a2abeebb61c27d5c45311d859f2",
"0x095ed2ffe393d7845dab5efc06cc94088572d2fdedcee59953f0fcea5acbcf41",
"0x85e52d2033b68362044642e3a264f6c00df811353344de66cac64a719406c35d",
"0x4821da311c65b6ccdbc6488be1e6d44e8e6a75a2ea1e891c91c5819d05854f74",
"0x5dded961b8f992833521f7368a1518b1464471dfafb3d4d1249adc5acca9230d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


