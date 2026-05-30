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
      <Weather />
    </main>
    </div>
  )
}

export default App