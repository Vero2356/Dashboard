import styles from './Header.module.css'
import { useState, useEffect } from 'react'

function Greetings() {
    let hour = new Date().getHours()
    switch (true) {
        case hour >= 5 && hour < 13: return "Good Morning, "
        case hour >= 13 && hour < 19: return "Good Afternoon, "
        case hour >= 19 && hour < 22: return "Good Evening, "
        default: return "Good Night, "
    }
}

function GetName() {
    let name = "Petr"
    return name
}

function ShowTime() {
    let now = new Date()
    let time = now.toLocaleTimeString('cs-CZ', {

        hour: '2-digit',
        minute: '2-digit',
    })
    return time
}

export default function Header() {
    const [time, setTime] = useState(ShowTime())

    useEffect (() => {
const interval = setInterval(() => {
    setTime(ShowTime())
}, 1000)
return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.header}>
            <h1 className={styles.greetings}>{Greetings()}{GetName()}
            </h1>
            <h2 className={styles.time}>
                {time}
            </h2>
        </div>
    )
}