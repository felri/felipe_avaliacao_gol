import React from 'react';
import renderer from 'react-test-renderer';

import Table from '../../../../src/components/Table'
import Title from '../../../../src/components/Title'

const MOCK = {
  "arrayWeather": [
    {
      "air_pressure": 1015,
      "applicable_date": "2020-02-02",
      "created": "2020-02-02T11:06:32.051693Z",
      "humidity": 63,
      "id": 5842161700438016,
      "max_temp": 28.215,
      "min_temp": 18.884999999999998,
      "predictability": 73,
      "the_temp": 27.51,
      "visibility": 9.999726596675416,
      "weather_state_abbr": "s",
      "weather_state_name": "Showers",
      "wind_direction": 92.5,
      "wind_direction_compass": "E",
      "wind_speed": 3.5310870516185475,
    },
    {
      "air_pressure": 1013,
      "applicable_date": "2020-02-03",
      "created": "2020-02-02T11:06:35.208506Z",
      "humidity": 61,
      "id": 6637154308456448,
      "max_temp": 29.189999999999998,
      "min_temp": 18.69,
      "predictability": 73,
      "the_temp": 28,
      "visibility": 9.999726596675416,
      "weather_state_abbr": "s",
      "weather_state_name": "Showers",
      "wind_direction": 35.5,
      "wind_direction_compass": "NE",
      "wind_speed": 2.6304014554998805,
    },
    {
      "air_pressure": 1013,
      "applicable_date": "2020-02-04",
      "created": "2020-02-02T11:06:38.097308Z",
      "humidity": 70,
      "id": 5216692365950976,
      "max_temp": 27.79,
      "min_temp": 19.060000000000002,
      "predictability": 77,
      "the_temp": 27.91,
      "visibility": 9.931375765529308,
      "weather_state_abbr": "hr",
      "weather_state_name": "Heavy Rain",
      "wind_direction": 348.5,
      "wind_direction_compass": "NNW",
      "wind_speed": 3.082096953789867,
    },
    {
      "air_pressure": 1013,
      "applicable_date": "2020-02-05",
      "created": "2020-02-02T11:06:41.133672Z",
      "humidity": 77,
      "id": 6342592272793600,
      "max_temp": 26.675,
      "min_temp": 18.785,
      "predictability": 77,
      "the_temp": 24.69,
      "visibility": 8.390996579972958,
      "weather_state_abbr": "hr",
      "weather_state_name": "Heavy Rain",
      "wind_direction": 324,
      "wind_direction_compass": "NW",
      "wind_speed": 3.759095084705321,
    },
    {
      "air_pressure": 1012,
      "applicable_date": "2020-02-06",
      "created": "2020-02-02T11:06:44.165443Z",
      "humidity": 89,
      "id": 4664342928687104,
      "max_temp": 24.36,
      "min_temp": 18.96,
      "predictability": 77,
      "the_temp": 22.46,
      "visibility": 7.123399347808796,
      "weather_state_abbr": "hr",
      "weather_state_name": "Heavy Rain",
      "wind_direction": 45.999999999999986,
      "wind_direction_compass": "NE",
      "wind_speed": 2.585197645748827,
    },
    {
      "air_pressure": 1011,
      "applicable_date": "2020-02-07",
      "created": "2020-02-02T11:06:46.917979Z",
      "humidity": 93,
      "id": 5063532716490752,
      "max_temp": 21.62,
      "min_temp": 18.335,
      "predictability": 77,
      "the_temp": 20.16,
      "visibility": 5.2828978764018135,
      "weather_state_abbr": "hr",
      "weather_state_name": "Heavy Rain",
      "wind_direction": 354.5,
      "wind_direction_compass": "N",
      "wind_speed": 4.377980195657361,
    },
  ],
  "city": "Brasília",

}

describe('<Title />', () => {
  it('has 2 child', () => {
    const tree = renderer.create(<Title weatherInfo={MOCK} measurement="F" />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it('check title text', () => {
    const tree = renderer.create(<Title weatherInfo={MOCK} measurement="F" />).toJSON();
    expect(tree.children[0].children[0]).toBe('Brasília');
  });
  it('check title temp', () => {
    const tree = renderer.create(<Title weatherInfo={MOCK} measurement="F" />).toJSON();
    expect(tree.children[1].children[0]).toBe('81° F');
  });
});

describe('<Table />', () => {
  it('has 6 child', () => {
    const tree = renderer.create(<Table weatherInfo={MOCK} measurement="F" />).toJSON();
    expect(tree.children.length).toBe(6);
  });
  it('check table element 1', () => {
    const tree = renderer.create(<Table weatherInfo={MOCK} measurement="F" />).toJSON();
    expect(tree.children[0].children[0].children[0]).toBe('02/02');
    expect(tree.children[0].children[1].children[0]).toBe('81° F');
  });
  it('check table element 2', () => {
    const tree = renderer.create(<Table weatherInfo={MOCK} measurement="F" />).toJSON();
    expect(tree.children[1].children[0].children[0]).toBe('03/02');
    expect(tree.children[1].children[1].children[0]).toBe('82° F');
  });
  it('check table element 3', () => {
    const tree = renderer.create(<Table weatherInfo={MOCK} measurement="F" />).toJSON();
    expect(tree.children[2].children[0].children[0]).toBe('04/02');
    expect(tree.children[2].children[1].children[0]).toBe('81° F');
  });
  it('check table element 4', () => {
    const tree = renderer.create(<Table weatherInfo={MOCK} measurement="F" />).toJSON();
    expect(tree.children[3].children[0].children[0]).toBe('05/02');
    expect(tree.children[3].children[1].children[0]).toBe('75° F');
  });
  it('check table element 5', () => {
    const tree = renderer.create(<Table weatherInfo={MOCK} measurement="F" />).toJSON();
    expect(tree.children[4].children[0].children[0]).toBe('06/02');
    expect(tree.children[4].children[1].children[0]).toBe('72° F');
  });
  it('check table element 6', () => {
    const tree = renderer.create(<Table weatherInfo={MOCK} measurement="F" />).toJSON();
    expect(tree.children[5].children[0].children[0]).toBe('07/02');
    expect(tree.children[5].children[1].children[0]).toBe('68° F');
  });
});