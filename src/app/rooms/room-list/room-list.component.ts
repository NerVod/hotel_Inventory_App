import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnDestroy {

  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

 @Output() selectedRoom = new EventEmitter<RoomList>();


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  ngOnInit(): void {
  }

selectRoom(room: RoomList) {
  this.selectedRoom.emit(room)
}


ngOnDestroy(): void {
  console.log('on destroy is called')
}

}
