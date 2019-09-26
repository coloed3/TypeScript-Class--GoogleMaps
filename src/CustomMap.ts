import { Mappable } from './Mappable';

//insutrction how they can be an arugement to be a marker/

export class CustomMap extends Mappable {
  private googleMap: google.maps.Map;

  protected gmaps(map: string): Element {
    return document.getElementById(map);
  }

  constructor() {
    super();
    this.googleMap = new google.maps.Map(this.gmaps('map'), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: iMappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}
