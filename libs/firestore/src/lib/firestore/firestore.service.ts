import { inject, Inject } from '@angular/core';
import { FirestoreDoc } from './firestore-doc';
import { collection, Firestore, getDocs, limit, query } from '@angular/fire/firestore';

@Inject({ providedIn: 'root' })
export class FirestoreService {
  protected readonly firestore = inject(Firestore);
  private collection;

  constructor() {
    this.collection = collection(this.firestore, 'firestore-doc');
  }

  async loadAll(): Promise<FirestoreDoc[]> {
    const results = await getDocs(query(this.collection, ...[], ...[], limit(99)));
    const content: FirestoreDoc[] = [];
    results.docs.map((doc) => {
      content.push(doc.data() as FirestoreDoc);
    });

    return new Promise<FirestoreDoc[]>((resolve, reject) => {
      resolve(content);
    });
  }
}
