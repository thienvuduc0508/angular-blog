import { DatePipe } from '@angular/common';
import { Component, effect, Input, input } from '@angular/core';
import { Post } from '../../models/post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [ DatePipe, RouterModule],
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
