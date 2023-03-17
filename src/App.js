import styles from "./style";
import { Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Learn from "./pages/Learn";
import Appp from "./pages/Appp";
import Community from "./pages/Community";
import Waw from "./pages/Waw";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ScrollToTop from './components/Scrolltotop'
const App = () => (
  <div className="  w-full overflow-hidden block">
      <ScrollToTop />
       <Routes>
        <Route path="/" element={<Navbar />}>
          <Route className="" index element={<Home />} />
          <Route path="Learn" element={<Learn />} />
          <Route path="App" element={<Appp />} />
          <Route path="Community" element={<Community />} />
          <Route path="WalletechatWork" element={<Waw />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
        </Route>
       </Routes>
      <Footer/>
  </div>
);

export default App;