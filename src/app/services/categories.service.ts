import { Injectable, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  fireStore: Firestore = inject(Firestore);
  constructor() { }

  loadData() {
    const itemCollection = collection(this.fireStore, 'categories');
    return collectionData(itemCollection);
    
  }
}
