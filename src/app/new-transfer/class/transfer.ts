export class Transfer {
  public value: number;
  public description: string;
  public type: string;
  date: string;
  hours: string;

  constructor(value: number, description: string, type) {
    (this.value = value), (this.description = description), (this.type = type);
  }
}
