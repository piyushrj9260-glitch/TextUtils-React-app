import logo from './logo.svg';
import './App.css';

let name = "John Doe";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <img src="" alt="" />
    <div className="container">
      <h1>Welcome to My App</h1>
      <p>Hello, {name}!</p>
       <p>This is a simple React app.</p>
    </div>
    </>
  );
}

export default App;
