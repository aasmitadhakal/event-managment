import { Signup,Login,Navbar,Register,Newlogin } from "./component";
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/navbar" element={<Navbar />} />
      <Route exact path="/newlogin" element={<Newlogin/>} />
    </Routes>
      
    </div>
  );
}

export default App;
