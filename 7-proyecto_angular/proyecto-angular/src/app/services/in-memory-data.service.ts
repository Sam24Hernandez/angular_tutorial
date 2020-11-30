import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from '../models/article.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line: typedef
  createDb() {
    const articles = [
      {
        id: 1,
        title: 'Primer titulo',
        content: 'Primer contenido',
        name: 'Sam Hernandez',
        date: new Date(),
        image:
          'https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8',
      },
      {
        id: 2,
        title: 'Segundo titulo',
        content: 'Segundo contenido',
        name: 'Sam Hernandez',
        date: new Date(),
        image:
          'https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8',
      },
      {
        id: 3,
        title: 'Tercer titulo',
        content: 'Tercer contenido',
        name: 'Sam Hernandez',
        date: new Date(),
        image:
          'https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8',
      },
      {
        id: 4,
        title: 'Cuarto titulo',
        content: 'Cuarto contenido',
        name: 'Sam Hernandez',
        date: new Date(),
        image:
          'https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8',
      },
      {
        id: 5,
        title: 'Quinto titulo',
        content: 'Quinto contenido',
        name: 'Sam Hernandez',
        date: new Date(),
        image:
          'https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8',
      },
    ];
    const users = [
      { id: 11, name: 'Ivana Alarcón' },
      { id: 12, name: 'Hanna Zamora' },
      { id: 13, name: 'Freya Allan' },
      { id: 14, name: 'Mackenzie Foy' },
      { id: 15, name: 'Ysis Payro' },
      { id: 16, name: 'Andi Matichak' },
      { id: 17, name: 'Sadie Sink' },
      { id: 18, name: 'Isabelle Fuhrman' },
      { id: 19, name: 'Gina Stiebitz' },
      { id: 20, name: 'Anya Taylor-Joy' }
    ];
    return { articles, users };
  }

  genId(articles: Article[]): number {
    return articles.length > 0 ? Math.max(...articles.map(article => article.id)) + 1 : 1;
  }

  getId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
