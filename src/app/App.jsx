import '@/app/App.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'

function App() {

  return (
    <>
      <Header />
      <main className='center'>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
