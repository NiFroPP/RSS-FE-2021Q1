import { user } from '../../store/registration-store';
import { CreateBaseElement } from '../shared/create-base-element';
import { Card } from '../../store/card';
import { Score } from '../../store/score';
import { scoresStore } from '../../store/scores-store';
import { game } from '../../store/game';
import { CardElement } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { delay } from '../shared/delay';
import { TimerElement } from '../timer/timer-element';
import { ModalWinnerGame } from '../modal-winner-game/modal-winner-game';

const turnoverDelay = 1000;

export class Game extends CreateBaseElement {
  private readonly cardsField: CardsField;

  private readonly timer: TimerElement;

  private activeCard?: Card;

  private activeSecondCard?: Card;

  private activeTimer?: NodeJS.Timeout;

  private modalWinnerGame: ModalWinnerGame;

  constructor() {
    super('div', ['main__game']);

    this.timer = new TimerElement();

    this.cardsField = new CardsField();

    this.modalWinnerGame = new ModalWinnerGame();

    game.events.subscribe(() => {
      if (!game.isFinished) {
        this.newGame(game.cards);
      }
    });
  }

  private newGame(cards: Card[]): void {
    const score = new Score({
      firstName: user.firstName,
      lastName: user.lastName,
      emailName: user.emailName,
    });

    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardsField.element);

    if (this.activeTimer) {
      clearInterval(this.activeTimer);
    }

    this.activeTimer = setInterval(() => {
      score.time++;
      this.timer.showTimer(score.time);
    }, 100);

    this.cardsField.clear();

    const cardElements: Array<CardElement> = [];
    cards.forEach((card) => {
      const cardElement = new CardElement(card);

      cardElement.element.addEventListener('click', () => {
        this.cardHandler(card, score);
      });

      cardElements.push(cardElement);
    });

    this.cardsField.addCards(cardElements);

    this.element.removeChild(this.modalWinnerGame.element);
  }

  private async cardHandler(card: Card, score: Score) {
    if (!card.isTurnover || (this.activeCard && this.activeSecondCard)) {
      return;
    }

    card.turnoverToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      return;
    }

    this.activeSecondCard = card;

    if (!this.activeCard.compare(card)) {
      score.unmatchedPairs++;

      await delay(turnoverDelay);
      this.activeCard.turnoverToBack();
      card.turnoverToBack();
    }

    if (this.activeCard.compare(card)) {
      score.matchPairs++;

      if (score.matchPairs === game.cards.length / 2) {
        score.totalScore = (score.matchPairs - score.unmatchedPairs) * 100;
        score.totalScore -= score.time;

        scoresStore.add(score);

        if (this.activeTimer) {
          clearInterval(this.activeTimer);
        }

        game.isFinished = true;

        game.events.publish();

        this.cardsField.clear();
        this.timer.clearTimer();

        this.element.removeChild(this.timer.element);
        this.element.removeChild(this.cardsField.element);

        this.element.appendChild(this.modalWinnerGame.element);
        this.modalWinnerGame.addCongratText(score);
      }
    }

    this.activeCard = undefined;
    this.activeSecondCard = undefined;
  }
}
