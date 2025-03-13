This is a repository to reproduce an [issue](https://stackoverflow.com/questions/79505985/referenceerror-fetch-is-not-defined-when-jest-test-imports-firesbase-library] with) Firestore and Jest. 

You can run the application with:
```
npm run run-firebase-emulator   //start firebase emulators
npm run serve-firestore-issue   //start application
```
This works well.

On the other hand
```
npm run run-failing-test
```
demonstrate's the error.
