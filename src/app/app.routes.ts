import { Routes } from '@angular/router';
import { AboutUsComponent, CategoryComponent, ContactUsComponent, HomeComponent, PostComponent } from './pages';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'post', component: PostComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactUsComponent },
];
