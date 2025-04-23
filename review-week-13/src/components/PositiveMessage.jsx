import { useState } from 'react'
import { useEffect } from 'react'

function PositiveMessage({ goal, totalFruits }) {

    const [message, setMessage] = useState()
    


    useEffect(() => {
        const numberRemaining = goal - totalFruits
        if(totalFruits >= goal) {
            setMessage("🎉 Congratulations! You reached your goal!")
        } else if (totalFruits < 5){
            setMessage(`Keep going! ${numberRemaining} to go!`)
        } else if (totalFruits === 0) {
            setMessage("Let's start eating healthy!")
        }
    }, [totalFruits, goal])

    return (
        <div style={{ marginTop: '20px' }}>
          <h2>Daily Goal: {goal}</h2>
          <p>Progress: {totalFruits}</p>
          <p><strong>{message}</strong></p>
        </div>
    );
}

export default PositiveMessage