import { useState, useEffect } from "react";
import zmk from "./zkEVM.svg";
import toggle from "./toggle.svg";
import CountUp from "react-countup";
//wagmi
import { useAccount, useBalance, useConnect, useNetwork } from "wagmi";
import { getAccount, fetchBalance, watchAccount } from "@wagmi/core";
import { CustomBtn } from "./CustomBtn";
import { useDebounce } from "use-debounce";
import { ethers } from "ethers";
import {
  createPublicClient,
  http,
  parseAbiItem,
  stringify,
  createWalletClient,
  custom,
  validateTypedData,
  parseEther,
  formatUnits,
} from "viem";
import { sepolia, polygonMumbai } from "viem/chains";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RWT_ABI from "./abi/real-world.json";
import { CONFIG } from "./abi/config.js";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useContractEvent,
} from "wagmi";

import "./freesale.css";

const FreeSale = () => {
  //   const { connect, connectors } = useConnect();
  //   const { isConnected } = useAccount();
  const account = getAccount();

  const { chain, chains } = useNetwork();
  const [amount, setAmount] = useState(0);
  const [heading, setHeading] = useState(true);
  const { address, isConnected, status } = getAccount();
  const [reloadDta, setReloadDta] = useState(false);
  const [balance, setBalance] = useState(0);
  const [isError, setIsError] = useState();
  const [isLoadingBal, setIsLoadingBal] = useState();
  const [finalAmount, setFinalAmount] = useState(0);
  const [alert, setAlert] = useState(true);
  const [trxLoading, setTrxLoading] = useState(false);
  // const [debouncedFinalAmount] = useDebounce(finalAmount, 500)
  const [loading, setloading] = useState();

  const ETH_abi = [
    {
      constant: true,
      inputs: [{ name: "who", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];
  const abi = [
    {
      constant: true,
      inputs: [{ name: "who", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];
  const abiJson = [
    {
      constant: true,
      inputs: [{ name: "who", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        console.log("accountsChanged");
        // setReloadDta(!reloadDta);
        window.location.reload();
      });
      window.ethereum.on("chainChanged", () => {
        console.log("chainChanged");
        window.location.reload();
      });
    }
    // window.ethereum.addEventListener
  }, [reloadDta]);
  useEffect(() => {
    console.log(
      `Current connection status: ${isConnected ? "connected" : "disconnected"}`
    );
  }, [isConnected]);

  const btnhandler = async (request) => {
    setAlert(false);
    setTrxLoading(true);
    if (!account) {
      // setAlertContent(`Connect wallet`);
      setAlert(true);
      setTrxLoading(false);
      return;
    }
    if (window.ethereum) {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();
      if (request.chain === "ETH") {
        if (chainId === CONFIG.ETH_CHAIN_ID) {
          //get signer
          let acc = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          let signer = await provider.getSigner(acc[0]);
          // get owner
          const BettingContract = new ethers.Contract(
            CONFIG.ETHEREUM_CONTRACT_ADDRESS,
            ETH_abi,
            signer
          );

          //   let amountInEther = await ethers.utils
          //     .parseEther(request.amount)
          //     .toString();
          //   console.log("balance", balance.toString());
          //   console.log("amountInEther", amountInEther);

          try {
            const RealWorldToken = new ethers.Contract(
              CONFIG.RWT_CONTRACT_ADDRESS,
              RWT_ABI,
              signer
            );
            // const transaction =
            //   await BettingContract.withdrawBulkTokensToWallets(
            //     tokenAdd,
            //     [await ethers.utils.parseEther(request.amount)],
            //     // [await ethers.utils.parseEther("0.000001")],
            //     [request.bettor.username]
            //   );
            // await transaction.wait();
          } catch (err) {
            // setAlertContent(`Error: ${err.message}`);
            setAlert(true);
            setTrxLoading(false);
            console.log("err", err);
          }
        } else {
          // setAlertContent("switch to ETH");
          setAlert(true);
          setTrxLoading(false);
        }
      }
      if (request.chain === "BSC") {
        if (chainId === CONFIG.BNB_CHAIN_ID) {
          let acc = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          let signer = await provider.getSigner(acc[0]);
          //busd
          // get owner
          const BettingContract = new ethers.Contract(
            CONFIG.CONTRACT_ADDRESS,
            abi,
            signer
          );
          const ownerAdd = await BettingContract.owner();

          //busd
          const tokenAdd = await BettingContract.usdToken();
          console.log("tokenAdd", tokenAdd);
          //get balance of contract
          const contract = new ethers.Contract(tokenAdd, abiJson, signer);

          const balance = await contract.balanceOf(CONFIG.CONTRACT_ADDRESS);
          console.log("balance", balance.toString());
          let amountInEther = await ethers.utils
            .parseEther(request.amount)
            .toString();
          console.log("amountInEther", amountInEther);
          // if (balance.lt(amountInEther)) {
          //   setAlertContent(
          //     `not enough contract balance, available balance: ${await ethers.utils
          //       .formatEther(balance)
          //       .toString()}`
          //   );
          //   setAlert(true);
          //   setTrxLoading(false);
          //   return;
          // }

          try {
            const BettingContract = new ethers.Contract(
              CONFIG.CONTRACT_ADDRESS,
              abi,
              signer
            );
            const transaction =
              await BettingContract.WithdrawBulkTokensToWallets(
                tokenAdd,
                // [await ethers.utils.parseEther("0.0004")],
                [await ethers.utils.parseEther(request.amount)],
                [request.bettor.username]
              );
            await transaction.wait();
          } catch (err) {
            // setAlertContent(`Error: ${err.message}`);
            setAlert(true);
            setTrxLoading(false);
            console.log("err", err);
          }
        } else {
          // setAlertContent("switch to BSC");
          setAlert(true);
          setTrxLoading(false);
        }
      }
    } else {
      // setAlertContent("install metamask extension!!");
      setAlert(true);
      setTrxLoading(false);
    }
  };
  const getBalA = async () => {
    setIsLoadingBal(true);
    if (address) {
      const balance = await fetchBalance({
        address: address,
        token: "0x97F894Be595f46453f5Aaf3694325467D72402d2",
        chainId: 80001,
      });
      setBalance(balance);
    }
  };
  return (
    <>
      <section className="inner-intro  padding bg-img1 overlay-dark light-color">
        <div className="container">
          <div className="row title">
            <h1>PreSale</h1>
            <div className="page-breadcrumb"></div>
          </div>
        </div>
      </section>

      {/*            
          <div className='RightMain'>
            
        
          
          <div className='firtone'>
          <div className='Birdgetext'> 
          <h3>Swapping</h3>
          
          </div>
          <div className='buttoncollection'>
            <div className='bgDiv'>
              <div className='button1'> Amount Raised
              <p> $<CountUp end={1452433} duration={5}/></p>
              </div>
              <div className='button1'>Remaning Token
                <p><CountUp end={34545466} duration={5}/></p>
              </div>
              
            </div>
          </div>
    
          
            
            <div className='etherum'>
              <h3>Buy now before price increased</h3>
            <div className='divone'>
            
             </div>
             
              
           
            </div>
            
             <div className='buttonbox'>
          
              <div className='buttonbox1'>
              <p className='percentage'>70% sold</p>
              </div>
             </div>
             <div className='tranferTwo'>
             
              <div className='mainBox'>
                <p>Next Stage Price <span>2039 BUSD</span></p>
              </div>

              <div className='boxi'>
              <p> Total Tokens Sold <span> 324234</span></p>
                </div>
             </div>
             <div className='CurrencyBTN'> 
             <button> <img src='assets/images/bnb.svg' alt='BNB icon' className='bnb_icon'/>BNB</button>
             <button><img src='assets/images/usdt.svg' alt='USDT icon'/>USDT</button>
             </div>
             <div className='lastDiv'>
              Swapping
             </div>
          </div>
          </div>   */}

      <div className="RightMain">
        <div className="secondmainDiv">
          <div className="topSwapDiv">
            <h6>Swap</h6>
            <p>
              Swap any assets simply and securely with <br />
              coin-Ex self developed Algorithm
            </p>
          </div>

          <div className="ButtonContainer">
            <div className="divItem">
              <div className="iconDiv">
                <img
                  src="assets/images/bnb.svg"
                  alt="BNB icon"
                  className="bnbimage_icon"
                />
                <p>BUSD</p>
              </div>
              <p>1,945.58</p>
            </div>

            <div className="divItemLeft">
              <p className="balance_text">
                <span className="balance">Bal. </span>10.345.28 BUSD
              </p>
              <p>$1946.30</p>
            </div>
          </div>

          <div className="toggleBox">
            <button>
              <img src={toggle} alt="toggle icon" className="toggle_icon" />
            </button>
          </div>
          <div className="ButtonContainer1">
            <div className="divItem">
              <div className="iconDiv">
                <img src={zmk} alt="BNB icon" className="bnbimage_icon1" />
                <p>MATIC</p>
              </div>
              <p>842.31</p>
            </div>

            <div className="divItemLeft">
              <p className="balance_text">
                <span className="balance">Bal. </span>11.892.74 MATIC
              </p>
              <p>984.16</p>
            </div>
          </div>
          <div className="coversion">
            <p>Conversion Rate</p>
            <p>1BUSD = 0.799059 MATIC</p>
          </div>

          <div className="ConversionList">
            <div className="coversionItem">
              <p>conversion</p>
              <h5>$2.48</h5>
            </div>
            <div className="coversionItem">
              <p>Total Expected After Fees</p>
              <h5>$714.98</h5>
            </div>
            <div className="coversionItem">
              <p>The Least You'll Get at 100% Slippage</p>
              <h5>$714.98</h5>
            </div>
          </div>
          <div className="bntDiv">
            {" "}
            <CustomBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeSale;
