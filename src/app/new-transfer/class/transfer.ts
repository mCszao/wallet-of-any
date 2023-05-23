export class Transfer {
  public value: number;
  public description: string;
  public type: string;
  launchDate: Date;
  date: number;
  hours: number;

  constructor(value: number, description: string, type) {
    (this.value = value), (this.description = description), (this.type = type);
  }
}
