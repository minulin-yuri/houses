import AddressSection from './components/AddressSection';
import ResidentsSection from './components/ResidentsSection';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <AddressSection />
          <ResidentsSection />
        </div>
      </div>
    </div>
  );
}

export default App;
