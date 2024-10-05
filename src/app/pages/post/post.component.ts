import { Component } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { CommentFormComponent } from "../../comments/comment-form/comment-form.component";
import { CommentListComponent } from "../../comments/comment-list/comment-list.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostCardComponent, CommentFormComponent, CommentListComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

}
