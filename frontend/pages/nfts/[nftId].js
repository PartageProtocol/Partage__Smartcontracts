// the single nft page is a template for each NFT, retrieving data from db.

// public funtions: buy-fractions, buy-nft (listed for sale)
// read-only functions: get-overall-supply, get-owner, get-total-supply, get-utility-provider, get-token-uri

import { bufferCVFromString, callReadOnlyFunction } from '@stacks/transactions';
import { StacksTestnet, StacksMainnet } from '@stacks/network';

const contractAddress = 'ST2NC54N30J95AHB55W6VY3MF9X4G07F4XCPVYKGD';
const contractName = 'partage-v1';
const functionName = 'get-total-supply';
const buffer = bufferCVFromString('how many fractions of this nft are supplied on the market?');
const senderAddress = 'ST2F4BK4GZH6YFBNHYDDGN4T1RKBA7DA1BJZPJEJJ';

const network = new StacksTestnet();
//const network = new StacksMainnet();

const options = {
  contractAddress,
  contractName,
  functionName,
  functionArgs: [buffer],
  network,
  senderAddress,
};

const result = await callReadOnlyFunction(options);
