import { Component, inject } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { CommentFormComponent } from "../../comments/comment-form/comment-form.component";
import { CommentListComponent } from "../../comments/comment-list/comment-list.component";
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { switchMap } from 'rxjs';
import { Post } from '../../models/post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostCardComponent, CommentFormComponent, CommentListComponent, DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostsService);
  postDetail!: Post;
  similarPosts: Post[] = [];
  ngOnInit():void {
    this.route.params.pipe(
      switchMap(({id}) => this.postService.loadOnePost(id)),
      switchMap((post: Post) => {
        this.postDetail = post;
        return this.postService.loadSimilarPost(this.postDetail.category.categoryId);
      })
    ).subscribe((similarList: Post[]) => {
      this.similarPosts = similarList;
      console.log(this.similarPosts);
      
    })
  }

  convertDate(timestamp: any): Date {
    return timestamp.toDate();
  }
}
