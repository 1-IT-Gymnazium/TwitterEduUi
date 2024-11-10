import { AfterViewInit, Component, Input } from '@angular/core';
import { PostDetail } from '../../models/post-detail.interface';
import { PostDetailComponent } from "../../components/post-detail/post-detail.component";

@Component({
  selector: 'app-post-detail-page',
  standalone: true,
  imports: [PostDetailComponent],
  templateUrl: './post-detail-page.component.html',
  styleUrl: './post-detail-page.component.scss'
})
export class PostDetailPage implements AfterViewInit {
 @Input() post!: PostDetail;

 ngAfterViewInit(): void {
  console.log('wtf');
  console.log(this.post)

 }
}
