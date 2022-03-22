import './App.css';
import { FeaturedBy } from './components/FeaturedBy';
import { Header } from './components/Header';
import { DidYou } from './components/DidYou';
import { Navbar } from './components/Navbar';
import { Offers } from './components/Offers';
import { BuiltFor } from './components/BuiltFor'
import  Review  from './components/Review';
import { LimitedOffer } from './components/LimitedOffer';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Requests } from './components/Requests';
import ReduxShop  from './components/shop/Reduxshop';
import Cart from './components/Cart';




function App() {

  return (
    <>
  
    <Router>
      <Navbar />
    
        <Routes>
          <Route exact path="/" element={
            <>
              <Header />
              <Review />
              <DidYou />
              <FeaturedBy />
              <BuiltFor />
              <Offers />
              <LimitedOffer />
            </>
          } />

          <Route path="/custom" element={
            <>
              <Requests />
            </>
          } />

          <Route path="/shop" element={
            <>
            <ReduxShop />
            </>
          } />

          <Route path="/cart" element={
            <>
            <Cart />
            </>
          } />

        </Routes>
  
      <Footer />
    </Router>
    


    </>
  );
}

export default App;
