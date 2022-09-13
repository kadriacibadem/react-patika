import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {CitiesProvider} from './context/CitiesContext';
import Card from './components/Card';

function App() {

  
  return (
    <div>
      <CitiesProvider>
        <Header />
        <Card />
      </CitiesProvider>
    </div>
  );
}

export default App;

