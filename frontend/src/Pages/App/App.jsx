import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from '../../components/sidebar/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Sidebar />
    </div>
  )
}

export default App
