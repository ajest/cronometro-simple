import { useEffect, useState } from 'react'
import { Button } from './components/buttons/Button'
import PlayIcon from './components/icons/PlayIcon'
import StopIcon from './components/icons/StopIcon'

function App () {
  const [counter, setCounter] = useState(10000)
  const [time, setTime] = useState('00:00')

  function timeConvert (num) {
    let hours = Math.floor(num / 60)
    let minutes = num % 60

    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    return `${hours}:${minutes}`
  }

  useEffect(() => {
    setInterval(() => {
      setCounter((preValue) => preValue + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    setTime(timeConvert(counter))
  }, [counter])

  return (
    <section className="container">
      <h1>{time}</h1>
      <menu>
        <ul>
          <li><Button><PlayIcon /></Button></li>
          <li><Button><StopIcon /></Button></li>
        </ul>
      </menu>
    </section>
  )
}

export default App
