import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


interface PropsInterface {
  name: string
  company?: string
  timeAtCompany?: number
}

function GreetingComponent({ name, company }: PropsInterface) {
  return <h1>Hello {name} {company && `from ${company}`} 👋</h1>
}

function App() {
  const [count, setCount] = useState<number>(0) // [getter, setter()]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />

        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <GreetingComponent name="Ruth" company=''></GreetingComponent>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
