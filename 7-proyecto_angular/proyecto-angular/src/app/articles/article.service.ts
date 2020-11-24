import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Article } from '../models/article.model';
import { ARTICLES } from '../models/mock-articles';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  getArticles(): Observable<Article[]> {
    // this.messageService.add('ArticleService: fetched articles');
    return of(ARTICLES);
  }

  // tslint:disable-next-line: typedef
  getArticle(id: number | string) {
    return this.getArticles().pipe(
      map((articles: Article[]) => articles.find(article => article.id === +id))
    );
  }
}
