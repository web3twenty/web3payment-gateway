import React, { useState } from 'react';
import { ethers } from 'ethers';

export const PaymentGateway = ({ contractAddress, contractABI }) => {
  const [ethAmount, setEthAmount] = useState('');

  const depositEth = async () => {
    try {
      if (!window.ethereum) throw new Error('MetaMask is required');
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
  
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const tx = await signer.sendTransaction({
        to: contractAddress,
        value: ethers.utils.parseEther(ethAmount),
      });
  
      await tx.wait();
      alert('Deposit successful!');
    } catch (error) {
      console.error(error);
      alert(`Error: ${error.message}`);
    }
  };
  

  return (
    <div>
      <h1>Crypto Payment Gateway</h1>
      <input
        type="text"
        placeholder="Enter ETH amount"
        value={ethAmount}
        onChange={(e) => setEthAmount(e.target.value)}
      />
      <button onClick={depositEth}>Deposit ETH</button>
    </div>
  );
};