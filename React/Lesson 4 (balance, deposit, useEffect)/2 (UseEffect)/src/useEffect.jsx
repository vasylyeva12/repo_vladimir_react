import React, { useEffect, useState } from 'react'
import ListItem from './components/ListItem';

const App = () => {
    const [balance, setBalance] = useState(0);
    const [isToggle, setIsToggle] = useState(false);

    const handleDeposit = () => {
        setBalance(prevBalance => prevBalance + 500);
    }

    useEffect(() => {
        console.log("Balance Update!")
    }, [balance]);

    useEffect(() => {
        console.log("useEffect Update")
    });

    return (
        <div>
            <h2>Your Balance: {balance}$</h2>

            <div>
                <button onClick={handleDeposit}>Deposit</button>

                <button onClick={() => setIsToggle(!isToggle)}>{!isToggle ? "Options Add" : "Option Remove"}</button>
            </div>

            {
                isToggle && <ListItem />
            }
        </div>
    )
}

export default App