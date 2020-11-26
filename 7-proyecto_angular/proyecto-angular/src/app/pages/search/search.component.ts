import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  articles$: Observable<Article[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private articleService: ArticleService
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.articles$ = this.searchTerms.pipe(
      // esperar 300ms después de cada pulsación de tecla antes de considerar el término
      debounceTime(300),

      // ignorar el nuevo término si es el mismo que el anterior
      distinctUntilChanged(),

      // cambiar a una nueva búsqueda observable cada vez que el término cambia
      switchMap((term: string) => this.articleService.searchArticles(term)),
    );
  }

}
