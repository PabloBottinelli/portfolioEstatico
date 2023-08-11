import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-item',
  templateUrl: './tech-item.component.html',
  styleUrls: ['./tech-item.component.css']
})
export class TechItemComponent {
  @Input() name: string = '';
  @Input() lvl: number = 1;
}
