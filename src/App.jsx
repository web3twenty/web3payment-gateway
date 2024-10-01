import { useState } from 'react'
   import { contractABI, contractAddress } from './contract.jsx'
import { PaymentGateway } from './PaymentGateway.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <PaymentGateway
          contractAddress={contractAddress}
          contractABI={contractABI}
        ></PaymentGateway>

      </div>
    </>
  )
}

export default App
