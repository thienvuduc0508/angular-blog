import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  postList: Post[] = [];
  title: string = '';
  private postService = inject(PostsService);
  private route = inject(ActivatedRoute);
  ngOnInit() {
    this.route.params.subscribe((val: any) => {
      this.title = val.category;
      this.postService.loadCategoryPosts(val.category).subscribe((postItem: Post[]) => {
        this.postList = postItem;
      });
    })
  }
}
