import './App.css';
import CakeContainer from './component/CakeContainer';
import store from './redux/store';
import {Provider} from 'react-redux'
import HooksCakeContainer from './component/HooksCakeContainer';
import IceCreamContainer from './component/iceCreamContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
