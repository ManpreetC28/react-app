import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alerts from './components/Alerts';



function App() {
  return (
  <>
    <Navbar title="TextUtils" aboutus="About us"/>
    <Alerts Alerts="This is"/>
    <div className="container my-3">
    <About/>
    <TextForm title="Text"/>

    </div>
  </>
  );
}

export default App;
