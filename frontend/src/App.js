import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <main className='py-3'>
        <Container>
          <Routes>
          <Route path='/' Component={HomeScreen}exact />
          <Route path='/product/:id' Component={ProductScreen}exact />
          </Routes>
        </Container>
        </main>    
      <Footer />
      </BrowserRouter>
    
  );
}

export default App;
