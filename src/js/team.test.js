import Team from './team';
import Character from './character';

test('return list of one character', () => {
  const character = new Character();
  const team = new Team();

  team.add(character);

  const result = [character];

  expect(team.toArray()).toEqual(result);
  expect(team.toArray()).not.toBe(result);
});

test(' throw Error with same character', () => {
  const team = new Team();
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  };

  team.add(character);

  const result = Error('Character is already at team');

  expect(() => team.add(character)).toThrow(result);
});

test('return list with no duble characters', () => {
  const member1 = new Character();
  const member2 = new Character();
  const team = new Team();

  team.addAll(member1, member2, member1);

  const result = [member1, member2];

  expect(team.toArray()).toEqual(result);
  expect(team.toArray()).not.toBe(result);
});
