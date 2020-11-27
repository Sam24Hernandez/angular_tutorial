import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }

  delete(article: Article): void {
    this.articleService.deleteArticle(article).subscribe(
      response => {
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.router.navigate(['/home']);
      }
    );
  }

  save(): void {
    this.articleService.updateArticle(this.article)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
