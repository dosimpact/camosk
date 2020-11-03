import React, {useState, useEffect} from 'react'

function ClockP() {
    const [clock, setClock] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => setClock(new Date()), 3000) // 시험 기동
        return () => clearInterval(timer)
    })
    return (
        <div>
            <h4>{clock.toLocaleDateString()}</h4>
            <h3>{clock.toLocaleTimeString()}</h3>
        </div>
    )
}

export default ClockP
