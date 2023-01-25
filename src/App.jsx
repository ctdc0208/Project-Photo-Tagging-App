import { useState } from 'react'
import './App.css'

function App() {   
  return ( 
    <div className='background-opacity'>
        <div className='main-container'>
            <div className='square'>
            </div>
            <div className='navbar navbar-divider'>
                <div className='title margin-left-20px'>
                    Photo Tagging App
                </div>
                    <div className='find-title margin-left-20px'>
                        Find:
                    </div>
                    <div className='find-container margin-left-20px'>
                        <div className='find-logo'>Logo</div>
                        <div>Spiderman</div>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default App