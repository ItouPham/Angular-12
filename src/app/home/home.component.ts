import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = 'Angular';

  number = [1,3,5,7,8,10];
  ngOnInit() {}

  resetText() {
    this.name = '';
  }
}
