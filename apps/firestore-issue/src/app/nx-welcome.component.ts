import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreDoc, FirestoreService } from '@angular-monorepo/firestore';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <h2>Firestore Issue</h2>
    <ul>
      @for (doc of documents; track doc.name) {
      <li>{{doc.name}} - {{doc.description}}</li>
      }
    </ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  readonly firestoreService = inject(FirestoreService);
  documents: FirestoreDoc[] = [];

  async ngOnInit(): Promise<void> {
    this.documents = await this.firestoreService.loadAll();
  }
}
