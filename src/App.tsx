import { BrowserRouter } from "react-router";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
