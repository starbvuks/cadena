import styles from "../styles/Home.module.css";
import { ethers, utils } from "ethers";
import abi from "../contracts/Counter.json";
import { useState, useEffect } from "react";

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const 

  return (
    <div className={styles.container}>
      <h1>dapp</h1>
    </div>
  );
}
