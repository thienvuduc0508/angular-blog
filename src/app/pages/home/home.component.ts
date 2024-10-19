import { Component, inject } from '@angular/core';
import { PostCardComponent } from "../../layouts/post-card/post-card.component";
import { PostsService } from '../../services/posts.service';
import { take } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredPostList: any;
  latestPostList: any;
  postService: any = inject(PostsService);
  ngOnInit() {
    this.postService.loadData().subscribe((val: any) => {
      this.featuredPostList = val;
    })

    this.postService.loadLatest().subscribe((val: any) => {
      this.latestPostList = val;
    })

  }
}
