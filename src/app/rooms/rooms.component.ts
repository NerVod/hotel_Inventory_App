import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms : 10,
    bookedRooms : 5
  }

  roomList: RoomList[] = [ {
    roomNumber: 101,
    roomType: "Deluxe Room",
    amenities: 'Air conditioner, free Wi-fi, Bathroom, kitchen',
    price: 300,
    photos: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
    checkinTime: new Date('18-Oct-2022'),
    checkoutTime: new Date('20-Oct-2022'),
    rating: 2.54846541,
  },
  {
    roomNumber: 102,
    roomType: 'Deluxe Room',
    amenities: 'Air conditionner, Bathroom, wifi jacuzzy, pool View',
    price: 1000,
    photos: 'https://images.unsplash.com/photo-1631049552240-59c37f38802b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    checkinTime: new Date('18-Oct-2022'),
    checkoutTime: new Date('20-Oct-2022'),
    rating: 3.4,
  },
  {
    roomNumber: 103,
    roomType: 'Private Suite Room',
    amenities: 'Air conditionner, Bathroom, jacuzzy, pool View, office space, Hammam',
    price: 15000,
    photos: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    checkinTime: new Date('18-Oct-2022'),
    checkoutTime: new Date('20-Oct-2022'),
    rating: 4.6,
  },



]
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  toggle() {
    this.hideRooms = !this.hideRooms
  }
}
