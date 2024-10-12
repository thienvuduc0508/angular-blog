import { inject, Injectable } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore, limit, orderBy, query, where } from '@angular/fire/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  fireStore: Firestore = inject(Firestore);
  constructor() { }

  loadData() {
    const itemCollection = collection(this.fireStore, 'posts');
    const appQuery = query(itemCollection, where('isFeatured', '==', true), limit(3));
    return collectionData(appQuery, { idField: 'id'});
  }

  loadLatest() {
    const itemCollection = collection(this.fireStore, 'posts');
    const appQuery = query(itemCollection, orderBy('createAt', 'desc'));
    return collectionData(appQuery, { idField: 'id'});
  }

  loadCategoryPosts(category: string) {
    const itemCollection = collection(this.fireStore, 'posts');
    const appQuery = query(itemCollection, where('category.category', '==', category));
    return collectionData(appQuery, { idField: 'id'});
  }

  loadOnePost(postId: string) {
    const item = collection(this.fireStore, `posts`);
    const docRef = doc(this.fireStore, `posts/${postId}`);
    return docData(docRef)
  }

  loadSimilarPost(categoryId: string) {
    const itemCollection = collection(this.fireStore, 'posts');
    const appQuery = query(itemCollection, where('category.categoryId', '==', categoryId));
    return collectionData(appQuery, { idField: 'id'});
  }
}
