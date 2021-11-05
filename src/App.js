import AddressSection from './components/AddressSection';
import ResidentsSection from './components/ResidentsSection';

import { Provider } from 'react-redux';
import { store } from './store/store';

import './style/App.scss';
import { useCallback, useState } from 'react';


function App() {

  const [currentAddress, setCurrentAddress] = useState({});

  const handleSetAddress = useCallback(
    (street, house, flat) => {
      setCurrentAddress({
        street: street,
        house: house,
        flat: flat,
      });
    }
  );

  console.log(currentAddress);

  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="wrapper">
            <AddressSection
              onSetAddress={handleSetAddress}
            />
            <ResidentsSection
              curAddress={currentAddress}
            />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
