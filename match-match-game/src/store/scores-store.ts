import { Score, ScoreResult } from './score';

const SCORES_KEY = 'scores';
export class ScoresStore {
  storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  async add(score: Score): Promise<void> {
    const scores = await this.readAll();

    scores.push(score);

    const scoreResults = scores.map((item) => item.serialize());

    this.storage.setItem(SCORES_KEY, JSON.stringify(scoreResults));
  }

  async readAll(): Promise<Score[]> {
    const rawScores = this.storage.getItem(SCORES_KEY);

    const scoreResults: ScoreResult[] = rawScores ? JSON.parse(rawScores) : [];

    return scoreResults.map((scoreResult) => Score.deserialize(scoreResult));
  }
}

export const scoresStore = new ScoresStore();
