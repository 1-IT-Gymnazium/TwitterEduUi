import { Component } from '@angular/core';
import { PostListComponent } from '../../components/post-list/post-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ PostListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
