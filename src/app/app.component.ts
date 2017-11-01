import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myPost = {
    title: 'MyPostTitle',
    isFavorite: false,
    isliked: true,
    likescount: 10
  };

  someDummyMethod() {
    console.log('Hello !!!' + this.title);
  }
}
