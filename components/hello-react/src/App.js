import './App.css';
import Header from './components/Header';



function App() {
  return (
    <>
      <Header name="Kadri" friends={["asd","dfg","cgg","qwe"]}
      address={{
        title: 'Artvin/Hopa',
        zip: 3423
      }}
       />
    </>
  );
}

export default App;
