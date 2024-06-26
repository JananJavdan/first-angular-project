import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList:Housinglocation[]=[
    {
      id: 0,
    name: 'Acme Fresh Start Housing',
    city: 'Chicago',
    state: 'IL',
    photo: '/assets/bernard.jpg',
    availableUnits: 4,
    wifi: true,
    laundry: true
  },
  {
    id: 1,
    name: 'A113 Transitional Housing',
    city: 'Santa Monica',
    state: 'CA',
    photo: '/assets/Casas.jpg',
    availableUnits: 0,
    wifi: false,
    laundry: true
  },
  {
    id: 2,
    name: 'Warm Beds Housing Support',
    city: 'Juneau',
    state: 'AK',
    photo: '/assets/ddd.jpg',
    availableUnits: 1,
    wifi: false,
    laundry: false
  },
  {
    id: 3,
    name: 'Homesteady Housing',
    city: 'Chicago',
    state: 'IL',
    photo: '/assets/fff.jpg',
    availableUnits: 1,
    wifi: true,
    laundry: false
  },
  {
    id: 4,
    name: 'Happy Homes Group',
    city: 'Gary',
    state: 'IN',
    photo: '/assets/origin.jpg',
    availableUnits: 1,
    wifi: true,
    laundry: false
  },
  {
    id: 5,
    name: 'Hopeful Apartment Group',
    city: 'Oakland',
    state: 'CA',
    photo: '/assets/origine.jpg',
    availableUnits: 2,
    wifi: true,
    laundry: true
  },
  {
    id: 6,
    name: 'Seriously Safe Towns',
    city: 'Oakland',
    state: 'CA',
    photo: '/assets/originee.jpg',
    availableUnits: 5,
    wifi: true,
    laundry: true
  },
  {
    id: 7,
    name: 'Hopeful Housing Solutions',
    city: 'Oakland',
    state: 'CA',
    photo: '/assets/origineee.jpg',
    availableUnits: 2,
    wifi: true,
    laundry: true
  },
  {
    id: 8,
    name: 'Seriously Safe Towns',
    city: 'Oakland',
    state: 'CA',
    photo: '/assets/tour-intro.jpg',
    availableUnits: 10,
    wifi: false,
    laundry: false
  },
  {
    id: 9,
    name: 'Capital Safe Towns',
    city: 'Portland',
    state: 'OR',
    photo: '/assets/uuu.jpg',
    availableUnits: 6,
    wifi: true,
    laundry: true
  }];

constructor() { }
getAllHousingLocations():Housinglocation[] {
  return this.housingLocationList;}

  getHousingLocationById(id:number):Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id ===id);
  }
  submitApplication(firstName:string,lastNmae:string,email:string){
    console.log(firstName,lastNmae,email);
  }
}
      
 

 
