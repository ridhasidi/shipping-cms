// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ShipmensTable from "./components/ShipmentsTable";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />}>
          <Route path="shipments" element={<ShipmensTable />} />
        </Route>
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
    </div>
  );
}

export default App;
