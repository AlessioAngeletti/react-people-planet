import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './layout/App';
import PlanetContextProvider from './context/planet-context';

ReactDOM.render(
  <PlanetContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PlanetContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
