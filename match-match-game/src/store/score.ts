type Player = {
  firstName: string;
  lastName: string;
  emailName: string;
};

export type ScoreResult = {
  time: number;
  unmatchedPairs: number;
  matchPairs: number;
  totalScore: number;
  player: Player;
};

export class Score {
  time: number;

  unmatchedPairs: number;

  matchPairs: number;

  totalScore: number;

  player: Player;

  constructor(player: Player) {
    this.time = 0;
    this.unmatchedPairs = 0;
    this.matchPairs = 0;
    this.totalScore = 0;
    this.player = player;
  }

  getScoreTime(): string {
    const time = Math.round(this.time / 10);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formatted = [
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
    ].join(':');
    return formatted;
  }

  getScoreMatchedPairs(): number {
    return this.matchPairs;
  }

  getScoreUnmatchedPairs(): number {
    return this.unmatchedPairs;
  }

  getTotalScore(): number {
    if (this.totalScore <= 0) {
      return 0;
    }
    return this.totalScore;
  }

  serialize(): ScoreResult {
    return {
      time: this.time,
      unmatchedPairs: this.unmatchedPairs,
      matchPairs: this.matchPairs,
      totalScore: this.totalScore,
      player: this.player,
    };
  }

  static deserialize(object: ScoreResult): Score {
    const score = new Score(object.player);

    score.time = object.time;
    score.unmatchedPairs = object.unmatchedPairs;
    score.matchPairs = object.matchPairs;
    score.totalScore = object.totalScore;

    return score;
  }
}
