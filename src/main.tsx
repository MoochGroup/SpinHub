import "bootstrap/scss/bootstrap.scss";
import {createRoot} from 'react-dom/client';
import App from './Components/App/App';
import './main.scss';


const rootElement = document.getElementById("root");

if(rootElement){
  const root = createRoot(rootElement);
  root.render(
    <App/>
  );

}else{
  console.error("Root element not found");
}