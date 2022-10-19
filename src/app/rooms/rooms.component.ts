import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges,  OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked  {

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

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>

  
  constructor(private roomsService: RoomsService) { }
  

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();

  }
  
  // ngDoCheck(): void {
    //   console.log('on changes is called')
    // }
    
    ngAfterViewInit(): void {
      // this.headerComponent.title = "Rooms View"
      
    }
    
    ngAfterViewChecked(): void {
      this.headerComponent.title = "Rooms View"
      // console.log(this.headerComponent)
      this.headerChildrenComponent.last.title= 'Last Title'
      // console.log(this.headerChildrenComponent.last)
    }
    
    
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
