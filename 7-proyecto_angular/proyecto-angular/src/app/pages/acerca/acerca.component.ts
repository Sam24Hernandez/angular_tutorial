import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    Swal.fire({
      title: 'Nueva Crush Añadida',
      text: 'La nueva chica se ha añadido correctamente',
      icon: 'success'
    });
    this.userService.addUser({ name } as User )
      .subscribe(user => {
        this.users.push(user);
      });

  }

  delete(user: User): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!, ¿ya no es especial? :(',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar Crush'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(u => u !== user);
        this.userService.deleteUser(user).subscribe(
          () => {
            Swal.fire(
              'Crush Eliminada',
              'Se va y no vuelve jamás...',
              'success'
            );
          },
        );
      } else {
        Swal.fire('Tranquilo, ella te gustara aún más.');
      }
    });
  }

}
