import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  show: boolean = true;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  constructor() {}

  ngOnInit(): void {}

  collapse(): void {
    this.show = false;
  }

  expand(): void {
    this.show = true;
  }
}
