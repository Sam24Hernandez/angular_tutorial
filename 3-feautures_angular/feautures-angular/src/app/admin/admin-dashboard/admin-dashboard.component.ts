import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];

  constructor(private route: ActivatedRoute) { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    // Capturar el ID de la sesión si esta disponible
    this.sessionId = this.route.queryParamMap.pipe(map(params => params.get('session_id') || 'None'));

    // Capturar su fragmento si esta disponible
    this.token = this.route.fragment.pipe(map(fragment => fragment || 'None'));
  }

}
