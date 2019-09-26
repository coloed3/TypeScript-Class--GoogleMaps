import { CustomMap } from './CustomMap';
import { Company } from './Company';
import { User } from './User';

const customMap = new CustomMap();
const userinfo = new User();
const company = new Company();

customMap.addMarker(userinfo);
customMap.addMarker(company);
