import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line: typedef
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr. Stranger' },
      { id: 12, name: 'Wonder Woman' },
      { id: 13, name: 'Spiderman' },
      { id: 14, name: 'Iron man' },
    ];
    return { heroes };
  }
}
