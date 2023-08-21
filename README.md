# partage-stx

This repository contains an iteration of the Partage Protocol on the Stacks blockchain.

Partage is made for Utility NFT owners willing to share utilities with casual users through a fractional ownership protocol. The partage-v1-1 smart contract feature functions to mint, burn, transfer, and fractionalize NFTs, list/unlist fractions for sale, buy, transfer and burn fractions. At the fractionalization the original NFT is locked in the contract. The original NFT can't be redeemed from escrow account of the contract, unless by someone owning 100% of the fractions and burning them. The fractions of NFT are following the Semi-Fungible Tokens SIP-013 standard (SFT = FT linked to an NFT). All fractional sales automatically spread payments between three beneficiaries: the utility provider (85%), the NFT owner (10%), and the platform (5%).

- smart contract is deployed on mainnet https://explorer.hiro.so/txid/0x34222f40dd5def2f42f033288f800310dd10b7a74b6ebc5fe91477533171f710?chain=mainnet

- a complete marketplace interation is available at https://hellopartage.xyz
