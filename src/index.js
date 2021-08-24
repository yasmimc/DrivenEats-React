import ReactDom from 'react-dom';
import App from './components/App';

const app = App();
ReactDom.render(app, document.querySelector(".root"));