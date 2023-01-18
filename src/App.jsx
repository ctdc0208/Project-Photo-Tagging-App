import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return ( 
    <div className='background-opacity'>
        <div className='main-container'>
            <div className='square'>
            </div>
            <div className='navbar'>
                Navbar
            </div>
        </div>
    </div>
    )
}

export default App