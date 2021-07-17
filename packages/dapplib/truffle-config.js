require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe stone random pave punch heavy knee army gasp'; 
let testAccounts = [
"0x3901fe43bf61335f10634a1c580781858147e97e4124e28febfd4c2c86ad8376",
"0xa35559bf4292b7f87640563f9c408f640a3022fadfa717c544c2652983637b4d",
"0xcc9d739cae40308226321d05e50cf9a4e0b9f89602c5eec9a344a64fc54007a8",
"0x03e30c982d429b1a88343e40d5eeb0d96ec6196eb2ab097412ef0e7b5b7677e9",
"0xcd2d5c7890a0a5cfe9d66a19f3827011c68fd7542f47906129d5922e04bf7930",
"0x457a4de04b7c396aa9838c4ded07cdf5523e879d3aabfd3aa2e5b89d3474244a",
"0x60269486ff98031184e420d1ef48589515e26e199fe44c9848213e704c9d2c29",
"0x3e00e5e65a1ac560734132c31fb3e444c1ea3e2bc419ff7c41e4dd597d505ee0",
"0xdf1179df4f96e28ce36d49978e6ba1d3f25c95b82ef1b19fea885bd244bfb5e8",
"0x7d766d6b7ab2c546410b2ee10c02f16b0015ca343c9b2310921c05951a6b88c6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

