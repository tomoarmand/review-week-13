import { useState } from 'react'
import { useEffect } from 'react'

function PositiveMessage({ goal, totalFruits }) {

    const [message, setMessage] = useState()
    


    // useEffect(() => {
    //     const numberRemaining = goal - totalFruits
    //     if(totalFruits >= goal) {
    //         setMessage("🎉 Congratulations! You reached your goal!")
    //     } else if (totalFruits < goal && totalFruits > 0){
    //         setMessage(`Keep going! ${numberRemaining} to go!`)
    //     } else {
    //         setMessage("Let's start eating healthy!")
    //     }
    // }, [totalFruits, goal])

    useEffect(() => {
        const numberRemaining = goal - totalFruits
        setMessage(
            totalFruits >= goal
            ? "🎉 Congratulations! You reached your goal!"
            : totalFruits > 0
            ? `Keep going! ${numberRemaining} to go`
            : "Let's start eating healthy!"
        )
    })
    

    return (
        <div style={{ marginTop: '20px' }}>
          <h2>Daily Goal: {goal}</h2>
          <p>Progress: {totalFruits}</p>
          <p><strong>{message}</strong></p>
        </div>
    );
}

export default PositiveMessage