import { Button } from './components/buttons/Button'
import PlayIcon from './components/icons/PlayIcon'
import StopIcon from './components/icons/StopIcon'

function App () {
  return (
    <section className="container">
      <h1>00:00:00</h1>
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
