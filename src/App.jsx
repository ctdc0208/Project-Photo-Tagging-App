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
                    <div className='find-title-container'>
                        <div className='find-title margin-left-20px'>
                            Find:
                        </div>
                        <div className='find-done-container'>
                            <div className='green-box'></div>
                            <div>Done</div>
                        </div>
                    </div>
                    <div className='find-main-container'> 
                        <div className='find-container margin-left-20px bg-green'>
                            <div className='find-logo angry-bird'></div>
                            <div>Red J. Bird</div>
                        </div>
                        <div className='find-container margin-left-20px'>
                            <div className='find-logo superman'></div>
                            <div>Superman</div>
                        </div>
                        <div className='find-container margin-left-20px'>
                            <div className='find-logo mario'></div>
                            <div>Mario</div>
                        </div>
                        <div className='find-container margin-left-20px'>
                            <div className='find-logo meeseeks'></div>
                            <div>Mr. Meeseeks</div>
                        </div>
                    </div>
                    <div className='time'>
                        <div className='margin-left-20px'>Time:</div>
                        <div className='time-digits'>24:00</div>
                        <button className='reset'>
                        <svg className='reset' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>reload</title><path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" /></svg>
                        </button>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default App