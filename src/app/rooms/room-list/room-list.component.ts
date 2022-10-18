import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  @Input() rooms: RoomList[] = [];

 @Output() selectedRoom = new EventEmitter<RoomList>();


  constructor() { }

  ngOnInit(): void {
  }

selectRoom(room: RoomList) {
  this.selectedRoom.emit(room)
}

}
