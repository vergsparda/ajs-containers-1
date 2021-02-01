export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((el) => {
      if (JSON.stringify(el) === JSON.stringify(character)) {
        throw new Error('Character is already at team');
      }
    });
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((member) => {
      this.members.add(member);
    });
  }

  toArray() {
    return [...this.members];
  }
}
