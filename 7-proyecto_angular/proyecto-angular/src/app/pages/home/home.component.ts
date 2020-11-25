import { Component, OnInit } from '@angular/core';

import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  public title: string;
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
    this.title = 'Últimos Artículos';
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles.slice(0, 5));
  }

}
