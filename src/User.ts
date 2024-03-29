import { Mappable } from './Mappable';
import faker from 'faker';

export class User extends Mappable {
  name: string;

  constructor() {
    super();
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
