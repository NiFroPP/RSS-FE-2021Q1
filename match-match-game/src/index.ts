import './style.scss';
import { App } from './app';
import { Footer } from './components/footer/footer';
import { FullScreenBtn } from './components/full-screen-button/full-screen-button';
import { Header } from './components/header/header';

window.onload = () => {
  const body = document.querySelector('body');

  if (!body) throw Error('Root element not found');

  new Header(body);
  new App(body);
  new Footer(body);
  new FullScreenBtn(body).ifFullScreen();
};
