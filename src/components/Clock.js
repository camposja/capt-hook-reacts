import React, { useState, useEffect } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => tick(), 1000)
    })

    const tick = () => {
        setTime(new Date())
    }

    return (
        <div>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock
