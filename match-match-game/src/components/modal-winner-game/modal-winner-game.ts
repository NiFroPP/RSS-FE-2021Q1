import { Score } from '../../store/score';
import './modal-winner-game.scss';
import { CreateBaseElement } from '../shared/create-base-element';
import { clearNoActiveFields } from '../shared/clear-no-active-fields';
import { addClassActiveField } from '../shared/add-class-active-field';
import { BestPlayers } from '../best-players/best-players';
import { pagesStore } from '../../store/page-store';

export class ModalWinnerGame extends CreateBaseElement {
  private bestPlayers: BestPlayers;

  constructor() {
    super('div', ['modal-winner-game']);

    this.bestPlayers = new BestPlayers();
  }

  addCongratText(score: Score): void {
    [
      'CONGRATULATIONS!',
      `You successfully found all matches on "${score.getScoreTime()}" minutes.`,
      `You guessed "${score.getScoreMatchedPairs()}" pairs.`,
      `You made "${score.getScoreUnmatchedPairs()}" wrong pairs comparisons.`,
      `You earned a total of "${score.getTotalScore()}" points.`,
    ].forEach((item) => {
      const congratContent = document.createElement('p');
      congratContent.classList.add('modal-winner-game__text');
      congratContent.textContent = item;
      this.element.appendChild(congratContent);
    });

    const modalWinnerBtn = document.createElement('div');
    modalWinnerBtn.classList.add('modal-winner-game__finish');
    modalWinnerBtn.innerHTML = 'OK!';
    this.element.appendChild(modalWinnerBtn);

    modalWinnerBtn.addEventListener('click', () => {
      this.element.innerHTML = '';

      clearNoActiveFields();
      addClassActiveField('best-score--active');

      pagesStore.setActive('best-score');
    });
  }
}
