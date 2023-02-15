import "../node_modules/bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './Route';
import NavBar from './Components/Nav';
import { Provider } from 'react-redux';
import store from './Redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <BrowserRouter>
        <NavBar/>
        <AppRoute/>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
