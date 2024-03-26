import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent {
  // fils()
  @Output()
  sendDataToDadEvent = new EventEmitter<string>();
  // fils(message)
  @Input({
    required: true,
    transform: (value: string) => 'cc',
  })
  message = 'CC je suis le Fils component';

  onSendDataToDadEvent() {
    this.sendDataToDadEvent.emit('cc papa');
  }
}
