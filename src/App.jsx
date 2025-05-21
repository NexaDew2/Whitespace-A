
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Try from './components/Try/Try';
import Footer from './components/Footer/Footer';
import PlanCardSection from "./components/PlansCardSection/PlanCardSection";
import Sponser from "./components/SponserSection/Sponser";
import OurClientSection from "./components/OurClientSection/OurClientSection";
import YourWork from "./components/YourWork/YourWork";

function App() {
  return (
    <>



      <Navbar />
      <PlanCardSection />
      <YourWork />
      <Sponser />
      <OurClientSection />
      <Footer />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/try" element={<Try />} />
      </Routes>


    </>
  );
}

export default App;
