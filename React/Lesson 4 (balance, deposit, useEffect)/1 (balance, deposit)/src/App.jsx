import React, { useState } from 'react'

const App = () => {
    const [balance, setBalance] = useState(0);

    const handleDeposit = () => {
        setBalance(prevBalance => prevBalance + 500);
    }

    return (
        <div>
            <h2>Your Balance: {balance}</h2>

            <div>
                <button onClick={handleDeposit}>Deposit</button>
            </div>
        </div>
    )
}

export default App