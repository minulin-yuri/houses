import AddressSection from './components/AddressSection';
import ResidentsSection from './components/ResidentsSection';

import { Provider } from 'react-redux';
import { store } from './store/store';

import './style/App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="wrapper">
            <AddressSection />
            <ResidentsSection />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
