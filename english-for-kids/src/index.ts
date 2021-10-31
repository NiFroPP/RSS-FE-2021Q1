import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const header = Header();
const main = Main();
const footer = Footer();

document.body.append(header, main, footer);
