import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from "./components/Home";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet';



function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Lazy cook</title>
      </Helmet>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
