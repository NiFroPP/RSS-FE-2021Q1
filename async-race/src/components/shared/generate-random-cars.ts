import { UpsertCarOptions } from '../../API/api';

const models = [
  'Mersedes',
  'BMW',
  'Audi',
  'Volkswagen',
  'Jaguar',
  'Opel',
  'Renault',
  'Porshe',
  'Jeep',
  'Ford',
  'Citroën',
  'Peugeot',
];

const names = [
  'AMG-GT-R',
  'Seven',
  'A8',
  'Passat',
  'S-Type',
  'Astra',
  'Sandero',
  '911-Carrera',
  'Grand-Cherokee',
  'Mondeo',
  'C4',
  '408',
];

const BASIC_NUMBER_OF_CARS = 100;

const getRandomName = () => {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  return `${model} ${name}`;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

export const generateRandomCars = (count = BASIC_NUMBER_OF_CARS): Array<UpsertCarOptions> => new Array(count)
  .fill(1)
  .map(() => ({
    name: getRandomName(),
    color: getRandomColor(),
  }));
