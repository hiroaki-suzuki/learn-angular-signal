import { Component, signal } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { SimplePdsUsersService, User } from '../../services/simple-pds-users.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-simple-pds',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  providers: [SimplePdsUsersService],
  templateUrl: './simple-pds.component.html',
  styleUrl: './simple-pds.component.scss',
})
export class SimplePdsComponent {
  users = signal<User[]>([])

  constructor(private simplePdsUsersService: SimplePdsUsersService) {}

  fetch() {
    this.simplePdsUsersService.getUsersWhoseNameStartsWithC().then((users: User[]) => {
      this.users.set(users)
    })
  }
}
