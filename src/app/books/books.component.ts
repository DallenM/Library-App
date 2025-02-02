import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  imports: [MatButtonModule, MatSlideToggleModule, BookDetailsComponent],
})
export class BooksComponent {
  

}
