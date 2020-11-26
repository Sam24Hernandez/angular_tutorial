import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from '../models/article.model';

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
    return { articles };
  }

  genId(articles: Article[]): number {
    return articles.length > 0 ? Math.max(...articles.map(article => article.id)) + 1 : 1;
  }
}
