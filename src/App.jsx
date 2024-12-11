import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from './components/Vcard'
import { GridPatternLinearGradient } from './components/demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='relative'>
          <div className='absolute bottom-10 left-10 bg-stone-500/5 font-semibold z-[999] px-2 py-1 rounded-lg'>powered by tl technologies</div>
        <GridPatternLinearGradient />
        </div> 
    </>
  )
}

export default App
