import './App.css'
import Sidebar from './components/Sidebar/Sidebar.tsx'
import Header from './components/Header/Header.tsx'
import Weather from './components/Weather/Weather.tsx'

function App() {
  return (
    <div className='app-shell'>
      <Sidebar />
      <main className='main-content'>
        <Header />
        <div className='widget-row1'>
          <div className='row1-1'>
            
          </div>
          <div className='row1-2'>
          <Weather />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App