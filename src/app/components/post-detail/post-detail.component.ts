import { Component, Input } from '@angular/core';
import { PostDetail } from '../../models/post-detail.interface';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [ ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  @Input() item!: PostDetail;
}
