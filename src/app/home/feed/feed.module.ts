import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
