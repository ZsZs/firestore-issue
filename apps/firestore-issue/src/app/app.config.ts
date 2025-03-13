import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirestoreService } from '@angular-monorepo/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirestore(() => {
      const firestore = getFirestore();
      connectFirestoreEmulator(firestore, 'localhost', 8080);
      return firestore;
    }),
    provideFirebaseApp(() => initializeApp({
      projectId: "firestore-fetch-issue",
      appId: "1:520341173421:web:5f549413ca699273f1c224",
      storageBucket: "firestore-fetch-issue.firebasestorage.app",
      apiKey: "AIzaSyAqIDhmONvbpSkJ7OfA1zpNWrFnR5O1scM",
      authDomain: "firestore-fetch-issue.firebaseapp.com",
      messagingSenderId: "520341173421"
    })),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    FirestoreService
  ],
};
