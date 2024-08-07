import Footer from './components/layout/footer/Footer';
import { TimeProvider } from './context/TimeContext';

import './App.css';
import Header from './components/layout/header/Header';
import Card from './components/pages/Card/Card';

function App() {
  return (
    <TimeProvider>
      <div className='container'>
        <Header/>
        <Card />
      </div>
      <Footer />
    </TimeProvider>
  )
}

export default App
