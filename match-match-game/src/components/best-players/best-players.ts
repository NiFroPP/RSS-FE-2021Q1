import { pagesStore } from '../../store/page-store';
import { Score } from '../../store/score';
import { scoresStore } from '../../store/scores-store';
import './best-players.scss';
import { CreateBaseElement } from '../shared/create-base-element';

export class BestPlayers extends CreateBaseElement {
  constructor() {
    super('div', ['main__best-score']);

    pagesStore.events.subscribe(() => {
      if (pagesStore.active === 'best-score') {
        this.getPlayers();
      } else {
        this.cleanElement();
      }
    });
  }

  async getPlayers(): Promise<void> {
    this.cleanElement();
    this.addBestPlayersTitle();

    const scores = await scoresStore.readAll();
    scores.sort((a, b) => b.totalScore - a.totalScore);

    const topTenPlayers = scores.slice(0, 10);

    for (const score of topTenPlayers) {
      this.addBestPlayersField(score);
    }
  }

  addBestPlayersTitle(): void {
    const bestPlayersTitle = document.createElement('h2');
    bestPlayersTitle.classList.add('best-score__title');
    bestPlayersTitle.innerHTML = 'Best Players:';
    this.element.appendChild(bestPlayersTitle);
  }

  addBestPlayersField(score: Score): void {
    const bestPlayers = document.createElement('div');
    bestPlayers.classList.add('best-score__player');
    bestPlayers.innerHTML = `Player: ${score.player.firstName} ${
      score.player.lastName
    } ${score.player.emailName} --- Total points: ${score.getTotalScore()}`;
    this.element.appendChild(bestPlayers);
  }

  cleanElement(): void {
    this.element.innerHTML = '';
  }
}
