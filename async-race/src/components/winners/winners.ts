import { updateState } from '../../store/update-state';
import { renderCarImage } from '../garage/car-image';
import store from '../../store/store';

export const renderWinners = (): string => `
  <h3 class="winners__title">Winners (${store.winnersCount})</h3>
  <h4 class="winners__pages">Page #${store.winnersPage}</h4>
  <table class="winners-table">
    <thead class="winners-table__head">
      <tr>
        <th class="winners-table__number">Number</th>
        <th class="winners-table__cars">Car</th>
        <th class="winners-table__names">Name</th>
        <th class="winners-table__wins table-wins ${
  store.sortBy === 'wins' ? store.sortOrder : ''
}" id="sort-by-wins">Wins</th>
        <th class="winners-table__times table-time ${
  store.sortBy === 'time' ? store.sortOrder : ''
}" id="sort-by-time">Best time (seconds)</th>
      </tr>
    </thead>
    <tbody class="winners-table__winner">
      ${store.winners
    .map(
      (winner, index) => `
        <tr>
          <td class="winner__number">${index + 1}</td>
          <td class="winner__car-color">${renderCarImage(winner.car.color)}</td>
          <td class="winner__car-name">${winner.car.name}</td>
          <td class="winner__count-wins">${winner.wins}</td>
          <td class="winner__time-wins">${winner.time}</td>
        </tr>
      `
    )
    .join('')}
    </tbody>
  </table>
`;

export const listenerSortWinners = (): void => {
  const setSortOrder = async (sortBy: string) => {
    store.sortOrder = store.sortOrder === 'asc' ? 'desc' : 'asc';
    store.sortBy = sortBy;

    await updateState.updateStateWinners();

    const winnersView = document.getElementById('winners-view') as HTMLElement;
    winnersView.innerHTML = renderWinners();
  };

  document.body.addEventListener('click', (event) => {
    const target = event.target as HTMLFontElement;

    if (target.classList.contains('table-wins')) {
      setSortOrder('wins');
    }
    if (target.classList.contains('table-time')) {
      setSortOrder('time');
    }
  });
};
