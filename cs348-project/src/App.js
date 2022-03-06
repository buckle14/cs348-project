import './App.css';
import {Link} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1 className='AppHeader'>Welcome to NFL Managers!</h1>
      <nav className='NavBar'>
        <Link to="/EditData">Edit Data</Link> | {" "}
        <Link to="/GetData">Get Data</Link> | {" "}
        <Link to="/InsertData">Insert Data</Link> | {" "}
        <Link to="/RemoveData">Remove Data</Link>
      </nav>
    </div>
  );
};