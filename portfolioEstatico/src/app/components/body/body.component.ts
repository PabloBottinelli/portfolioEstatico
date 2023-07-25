import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  stars: { x: number; y: number; tam: number; del: number; }[] = [];

  ngOnInit() {
    this.generateStars();
  }

  generateStars() {
    const numStars = 500;
    const skyWidth = window.innerWidth;
    const skyHeight = window.innerHeight;

    for (let i = 0; i < numStars; i++) {
      const x = this.getRandomNumber(0, skyWidth);
      const y = this.getRandomNumber(0, skyHeight);
      const tam = this.getRandomNumber(2, 6);
      const del = this.getRandomDelay();
      this.stars.push({ x, y, tam, del });
    }
  }

  private getRandomNumber(min: number, max: number): number{
    return Math.random() * (max - min) + min;
  }

  private getRandomDelay(): number{
    return Math.random() * 10;
  }
} 
