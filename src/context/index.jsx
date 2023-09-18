import React, { useContext, createContext, useState, useEffect } from "react";
import saveToIPFS from "../saveToIpfs";
import { useCreateAsset } from "@livepeer/react";
import getContract from "../utils/Contract";
import { FilMediaAddress } from "../constant";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [errors, setErrors] = useState("");
  const [openPlayer, setOpenPlayer] = useState(false);
  const [openPip, setPip] = useState(false);
  const [openBigScreen, setBigScreen] = useState(false);

  const uploadContent = async (data) => {
    // Get the contract from the getContract function
    let contract = await getContract(
      FilMediaAddress
    );

    // Upload the video to the contract
    await contract.uploadVideo(
      data.video,
      data.title,
      data.description,
      data.location,
      data.category,
      data.thumbnail,
      false,
      data.UploadedDate
    );
  };

  const connect = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        console.log(accounts[0]);
        setAccount(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    }else{
      setErrors("Pls Install Metamask to have fun")
    }
  };

  const fetchAccount = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          console.log(accounts[0]);
        } else {
          setErrors("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  }

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setAccount("");
      console.log("Please install MetaMask");
    }
  };

  useEffect(() => {
    fetchAccount();
    addWalletListener();
  }, [])
  


  return <StateContext.Provider value={{
    connect,
    account,
    setOpenPlayer,
    openPlayer,
    openPip,
    setPip,
    setBigScreen,
    openBigScreen
  }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
