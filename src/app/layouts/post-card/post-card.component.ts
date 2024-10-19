import { DatePipe } from '@angular/common';
import { Component, effect, Input, input } from '@angular/core';
import { Post } from '../../models/post';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [ DatePipe, RouterModule, TranslateModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() postData!: Post;
  constructor() {
    
  }
  ngOnInit() {
  }
  

  convertDate(timestamp: any): Date {
    return timestamp.toDate();
  }
}
