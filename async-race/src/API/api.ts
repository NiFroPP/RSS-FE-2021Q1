import base from './basic-api';

const MAX_CARS_PER_PAGE_IN_GARAGE = '7';

type Winners = {
  page: number;
  limit?: string;
  sort?: string;
  order?: string;
};

export type Car = {
  name: string;
  color: string;
  id: number;
  isEngineStarted: boolean;
};

export type UpsertCarOptions = {
  name: string;
  color: string;
};

export type Winner = {
  id: number;
  wins?: number;
  time: number;
};

type WinnerWithCar = Winner & {
  car: Car;
};
class API {
  getCar = async (id: number): Promise<Car> => (await fetch(`${base.garage}/${id}`)).json();

  getCars = async (
    page: number,
    limit = MAX_CARS_PER_PAGE_IN_GARAGE
  ): Promise<{ items: Array<Car>; count: string }> => {
    const response = await fetch(
      `${base.garage}?_page=${page}&_limit=${limit}`
    );

    return {
      items: await response.json(),
      count: response.headers.get('X-Total-Count') || '0',
    };
  };

  createCar = async (body: UpsertCarOptions): Promise<Car> => (
    await fetch(base.garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  deleteCar = async (id: number) => (await fetch(`${base.garage}/${id}`, { method: 'DELETE' })).json();

  updateCar = async (id: number, body: UpsertCarOptions) => (
    await fetch(`${base.garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  getSortOrder = (sort: string, order: string) => {
    if (sort && order) return `&_sort=${sort}&_order=${order}`;
    return '';
  };

  getWinner = async (id: number) => (await fetch(`${base.winners}/${id}`)).json();

  getWinners = async ({
    page,
    limit = '10',
    sort = '',
    order = '',
  }: Winners): Promise<{ items: Array<WinnerWithCar>; count: string }> => {
    const response = await fetch(
      `${base.winners}?_page=${page}&_limit=${limit}${this.getSortOrder(
        sort,
        order
      )}`
    );

    const items = await response.json();

    return {
      items: await Promise.all(
        items.map(async (winner: Winner) => ({
          ...winner,
          car: await this.getCar(winner.id),
        }))
      ),
      count: response.headers.get('X-Total-Count') || '0',
    };
  };

  getWinnerStatus = async (id: number): Promise<number> => (await fetch(`${base.winners}/${id}`)).status;

  deleteWinner = async (id: number) => (await fetch(`${base.winners}/${id}`, { method: 'DELETE' })).json();

  startEngine = async (id: number) => (await fetch(`${base.engine}?id=${id}&status=started`)).json();

  stopEngine = async (id: number) => (await fetch(`${base.engine}?id=${id}&status=stopped`)).json();

  drive = async (id: number) => {
    const res = await fetch(`${base.engine}?id=${id}&status=drive`).catch();
    return res.status !== 200 ? { success: false } : { ...(await res.json()) };
  };

  createWinner = async (body: Winner) => (
    await fetch(base.winners, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  updateWinner = async (id: number, body: Winner) => (
    await fetch(`${base.winners}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  saveWinner = async ({ id, time }: Winner): Promise<void> => {
    const winnerStatus = await this.getWinnerStatus(id);

    if (winnerStatus === 404) {
      await this.createWinner({
        id,
        wins: 1,
        time,
      });
    } else {
      const winner = await this.getWinner(id);
      await this.updateWinner(id, {
        id,
        wins: winner.wins + 1,
        time: time < winner.time ? time : winner.time,
      });
    }
  };
}
export const api = new API();
