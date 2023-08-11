import { Component } from '@angular/core';
import { works } from 'src/app/data';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  works = works;
}
