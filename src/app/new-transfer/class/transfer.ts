export class Transfer {
  public value: number;
  public description: string;
  public type: string;
  launchDate: Date;
  date: string;
  hours: string;

  constructor(value: number, description: string, type) {
    (this.value = value), (this.description = description), (this.type = type);
  }
}
