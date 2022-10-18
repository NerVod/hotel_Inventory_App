import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
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
  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms : 10,
    bookedRooms : 5}

  title = 'Room List :'

  roomList: RoomList[] = []  



  constructor() { }
  

  ngOnInit(): void {
    this.roomList = [ {
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
      amenities: 'Air conditionner, Bathroom, wi-fi jacuzzy, pool View',
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
  }
  
  // ngDoCheck(): void {
  //   console.log('on changes is called')
  // }


  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = "Rooms list";
  }

  selectRoom(room: RoomList) {
    console.log(room)
    this.selectedRoom = room
  }

  addRoom() {
    const room: RoomList= {
      roomNumber: 104,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, free Wi-fi, Bath in room, kitchen',
      price: 800,
      photos: 'https://images.unsplash.com/photo-1590490359854-dfba19688d70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
      checkinTime: new Date('20-Oct-2022'),
      checkoutTime: new Date('21-Oct-2022'),
      rating: 4.3
    };

    // this.roomList.push(room)
    this.roomList = [ ...this.roomList, room]
  }

}
