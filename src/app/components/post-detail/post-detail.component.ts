import { Component, Input } from '@angular/core';
import { PostDetail } from '../../models/post-detail.interface';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardSubtitle, MatCardActions, MatCardAvatar, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [ MatIcon, MatCard, MatCardSubtitle, MatCardActions, MatCardAvatar, MatCardHeader, MatCardContent, MatCardTitle],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  @Input() item!: PostDetail;
}
