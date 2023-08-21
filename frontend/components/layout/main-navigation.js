// main-navigation in layout needs: wallet connect
import ConnectWallet from "../ConnectWallet";
import classes from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <div className={classes.components}>
          {/* ConnectWallet file: `../components/ConnectWallet.js` */}
          <ConnectWallet />
        </div>
        </main>
    </div>
  );
}