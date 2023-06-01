export class Kitten {
  constructor(
    public name: string,
    public race: string,
    public birthDate: Date,
    public photo: string,
  ) {
    this.name = name;
    this.race = race;
    this.birthDate = birthDate;
    this.photo = photo;
  }
}
