// the homepage doesn't have web3 commands itself
// instead it showcases content from other pages,
// which contains their appropriate web3 commands:

1. // main-navigation: connect wallet

2. // [nftId]: buy-fractions, buy-nft
// NFT's data: get-owner, get-token-uri, get-utility-provider, get-total-supply

3. // dashboard: list-nft, unlist-nft, transfer-nft, burn-nft, fractionalize-nft,
// list-fractions, unlist-fractions, transfer (= transfer-fractions), burn-fractions\
// user's data: get-balance, get-overall-balance.

4. // admin: mint-nft, set-utility-provider, set-platform-fees

import ConnectWallet from "../components/ConnectWallet";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>Shared NFT Utilities</h1>

        <div>
          <p className="mt-4 w-full text-xl md:w-1/2">
            The smart contract Partage v1 contains public functions to mint,
            burn, transfer, fractionalize NFTs, list and unlist fractions for
            sale, buy, transfer and burn fractions.
          </p>
          <p className="mt-4 w-full text-xl md:w-1/2">
            At the fractionalization the original NFT is locked in an escrow
            account, from which it can be redeemed only by someone owning 100%
            of the fractions and burning them.
          </p>
          <p className="mt-4 w-full text-xl md:w-1/2">
            All purchases spread payment between three beneficiaries: the
            utility provider (85%), the listing maker (10%), and the platform
            fees (5%).
          </p>
        </div>
      </main>
    </div>
  );
}
