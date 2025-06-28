// Wallet bağlama
async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const walletAddress = accounts[0];
      document.getElementById("walletStatus").innerText = "Connected: " + walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4);
    } catch (err) {
      alert("Connection failed: " + err.message);
    }
  } else {
    alert("MetaMask not found. Please install MetaMask.");
  }
}

// Görev ödülü
function completeMission() {
  document.getElementById("rewardMessage").innerText = "🎉 Congratulations! You've earned 100 DVX 🎉";
}
