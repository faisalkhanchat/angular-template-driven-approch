import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  suggestUserName() {
    const suggestedUsername = 'Superuser';
  }
  onSubmit(from: NgForm) {
    console.log(from);
  }

}
