// import './App.css';
import {Component} from "react";
function App() {
  return (
    <div className="App">
      <Header></Header>
     <h1>Hello world</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsum expedita dolorum in omnis ducimus.</p>
     <Footer></Footer>
    </div>
  );
}

const Header = () => {
  return (
<nav>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>login</li>
  </ul>
</nav>
  );
};

class Footer extends Component {
  render(){
    return (
      <footer>
        <h3>Copyright &copy; 2024 Developed by Saefulloh</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  }
}

export default App;
