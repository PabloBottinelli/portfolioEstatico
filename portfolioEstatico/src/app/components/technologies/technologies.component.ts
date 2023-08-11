import { Component } from '@angular/core';
import { technologies } from 'src/app/data';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  technologies = technologies;
}
