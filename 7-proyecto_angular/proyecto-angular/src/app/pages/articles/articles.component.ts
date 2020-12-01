import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
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
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Borrar Definitvamente'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.articleService.deleteArticle(article).subscribe(
          () => {
            Swal.fire(
              '¡Borrado!',
              'El artículo ha sido borrado correctamente.',
              'success'
            ),
            this.router.navigate(['/home']);
          },
          error => {
            console.log(error);
            this.router.navigate(['/home']);
          }
        );
      } else {
        Swal.fire('Tranquilo, el artículo está a salvo.');
      }
    });
  }

  save(): void {
    this.articleService.updateArticle(this.article)
      .subscribe(() => {
        Swal.fire({
          title: 'Cambios Guardados',
          text: 'El artículo se ha editado y guardado correctamente.',
          icon: 'success'
        });
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
