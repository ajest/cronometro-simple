import { useState } from 'react'
import { Button } from './components/buttons/Button'
import PauseIcon from './components/icons/PauseIcon'
import PlayIcon from './components/icons/PlayIcon'
import StopIcon from './components/icons/StopIcon'

let intervalId = 0
function App () {
  const [counter, setCounter] = useState(null)
  const [isRunning, setIsRunning] = useState(false)

  const timeConvert = (num) => {
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

  const play = () => {
    setIsRunning(true)
    setCounter(counter === null ? 0 : counter)
    intervalId = setInterval(() => {
      setCounter((preValue) => preValue + 1)
    }, 1000)
  }

  const stop = () => {
    setCounter(null)
    setIsRunning(false)
    clearInterval(intervalId)
  }

  const pause = () => {
    setIsRunning(false)
    clearInterval(intervalId)
  }

  return (
    <section className="container">
      <h1>{timeConvert(counter)}</h1>
      <menu>
        <ul>
          <li>
            {!isRunning
              ? <Button onClick={play}><PlayIcon /></Button>
              : <Button onClick={pause}><PauseIcon /></Button>
            }
          </li>
          <li><Button onClick={stop}><StopIcon /></Button></li>
        </ul>
      </menu>
    </section>
  )
}

export default App
