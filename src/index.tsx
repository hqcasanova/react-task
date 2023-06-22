import ReactDOM from 'react-dom/client';

import App from './App';

import './reset.scss';
import './index.scss';

const containerEl = document.getElementById('app__container');
const root = ReactDOM.createRoot(containerEl as Element);
root.render(<App />);
