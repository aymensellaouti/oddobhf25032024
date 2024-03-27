import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'green';
  // Représente la couleur de background de notre DIV
  bgc = this.defaultColor;
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.snapshot);

  }
  ngOnInit(): void {
    this.defaultColor = this.activatedRoute.snapshot.params['defaultColor'];
    this.bgc = this.defaultColor;
  }
  changeColor(newColor: HTMLInputElement) {
    this.bgc = newColor.value;
    newColor.value = '';
  }

  reset() {
    this.bgc = this.defaultColor;
  }
}
