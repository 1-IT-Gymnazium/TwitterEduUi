import { Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/errors/not-found-page/not-found-page.component';
import { PostDetailPage } from './pages/post-detail-page/post-detail-page.component';
import { postDetailResolver } from './resolvers/post-detail-resolver';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', component: HomePageComponent, title: 'Home' },
      {
        path: 'not-found',
        component: NotFoundPageComponent,
        title: 'Not Found ',
      },
      { path: 'post/detail/:postId', component: PostDetailPage, title: 'Post Detail',
        resolve: { post: postDetailResolver }
    },
    ],
  },
  { path: '**', redirectTo: '/not-found' },
];
