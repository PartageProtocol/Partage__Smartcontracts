// the admin page is only for us (not accessible to users)
// mint-nft, set-utility-provider, set-platform-fees
import { useState } from "react";
import { AppConfig, UserSession, openContractCall } from "@stacks/connect";
import {
  NonFungibleConditionCode,
  FungibleConditionCode,
  createAssetInfo,
  makeStandardNonFungiblePostCondition,
  makeStandardSTXPostCondition,
  bufferCVFromString,
  standardPrincipalCV,
} from "@stacks/transactions";
import { StacksTestnet, StacksMainnet } from "@stacks/network";

function AdminPage() {
  const appConfig = new AppConfig(["publish_data"]);
  const userSession = new UserSession({ appConfig });
  const [userData, setUserData] = useState({});

  const network = new StacksTestnet();
  //const network = new StacksMainnet();

  async function mintNftHandler() {
    // the address of the smart contract deployer
    const contractAddress = "ST2NC54N30J95AHB55W6VY3MF9X4G07F4XCPVYKGD";
    // Add post conditions here
    const postConditionAddress =
      userSession.loadUserData().profile.stxAddress.testnet;
    const nftPostConditionCode = NonFungibleConditionCode.Sends;
    const contractName = "partage-v1";
    const nftName = "pNFT";
    const tokenAssetName = bufferCVFromString("pNFT");
    const nonFungibleAssetInfo = createAssetInfo(
      contractAddress,
      contractName,
      nftName
    );
    const stxConditionCode = FungibleConditionCode.LessEqual;
    const stxConditionAmount = 1000000; // price 1 STX in microstacks
    const postConditions = [
      makeStandardNonFungiblePostCondition(
        postConditionAddress,
        nftPostConditionCode,
        nonFungibleAssetInfo,
        tokenAssetName
      ),
      makeStandardSTXPostCondition(
        postConditionAddress,
        stxConditionCode,
        stxConditionAmount
      ),
    ];

    const functionArgs = [
      stringUtf8CV(uri),
      standardPrincipalCV(
        userSession.loadUserData().profile.stxAddress.testnet
      ),
    ];

    const options = {
      contractAddress: contractAddress,
      contractName: "partage-v1",
      functionName: "mint-nft",
      functionArgs,
      network,
      //pass the created post conditions
      postConditions,
      appDetails: {
        name: "partage-v1",
        icon: "https://hellopartage.xyz/favicon.ico",
      },
      onFinish: (data) => {
        console.log(data);
      },
    };

    await openContractCall(options);
  }

  function setProviderHandler() {}

  function setPlatformWalletHandler() {}

  return (
    <main>
      <div>
        <button className="Connect" onCLick={mintNftHandler}>
          Mint
        </button>
      </div>
      <div>
        <li>
          <button onCLick={setProviderHandler}>Mint</button>
        </li>
      </div>
      <div>
        <li>
          <button onCLick={setPlatformWalletHandler}>Mint</button>
        </li>
      </div>
    </main>
  );
}

export default AdminPage;
