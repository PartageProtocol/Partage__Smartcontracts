// this app includes the blockchain interface to merge into the nextJs app
import "../styles/globals.css";

import Layout from "../components/layout/layout";

import { Connect } from "@stacks/connect-react";

import { userSession } from "../components/ConnectWallet";

function MyApp({ Component, pageProps }) {
  let icon;
  if (typeof window !== "undefined") {
    icon = window.location.origin + "/nft-logo.png";
  }

  return (
    <Layout>
    <Connect
      authOptions={{
        appDetails: {
          name: "Partage-v1",
          icon,
        },
        redirectTo: "/",
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      }}
    >
      <Component {...pageProps} />
    </Connect>
    </Layout>
  );
}

export default MyApp;
