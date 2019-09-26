import { Mappable } from './Mappable';
import faker from 'faker';

export class Company extends Mappable {
  companyName: string;
  catchPhrase: string;

  constructor() {
    super();
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
