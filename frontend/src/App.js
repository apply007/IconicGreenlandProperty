import { BrowserRouter } from "react-router-dom";
import "./App.css";

import RouteAll from "./routes/RouteAll";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    
      <BrowserRouter>
        <RouteAll />
      </BrowserRouter>
  );
}

export default App;
