import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContext from './MainContext';
import EmptySpace from './EmptySpace';
import Footer from './Footer';

function App() {
  return (
  <div className='App'>
  <Header/>
  <EmptySpace/>
  <Sidebar/>
  <MainContext/>
  <EmptySpace/>
  <Footer/>
  </div>
  );
}

export default App;
