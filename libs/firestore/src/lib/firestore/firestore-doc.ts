import { v4 as uuidv4 } from 'uuid';

export class FirestoreDoc {
  readonly id: string;
  name: string;
  description: string;

  constructor(id?: string, name?: string, description?: string) {
    this.id = id ? id : uuidv4();
    this.name = name != undefined ? name : 'TestEntity';
    this.description = description != undefined ? description : '';
  }
}
