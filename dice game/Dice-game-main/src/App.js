import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Game/home';
import Landing from './components/Landing/landing'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


function App() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    );
}

export default App;
