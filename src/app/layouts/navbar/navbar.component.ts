import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  categoryList: any;
  categoryService: any = inject(CategoriesService);
  ngOnInit() {
    this.categoryService.loadData().subscribe((val: any) => {
      this.categoryList = val;
    }
    );
  }
}
