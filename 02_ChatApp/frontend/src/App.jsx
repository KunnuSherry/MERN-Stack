import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-red-100'>Kunal Sharma</div>
      <button className="btn btn-active">Default</button>
      <button className="btn btn-active btn-primary">Primary</button>
      <button className="btn btn-active btn-secondary">Secondary</button>
      <button className="btn btn-active btn-accent">Accent</button>
      <button className="btn btn-active btn-info">Info</button>
      <button className="btn btn-active btn-success">Success</button>
      <button className="btn btn-active btn-warning">Warning</button>
      <button className="btn btn-active btn-error">Error</button>
    </>
  )
}

export default App
