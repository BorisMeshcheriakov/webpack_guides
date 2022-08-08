import './index.scss';

const heading = document.createElement('h1');
heading.textContent = 'Webpack boilerplate';

const app = document.querySelector('#root');
app && app.append(heading);
