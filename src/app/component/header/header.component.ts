import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SlidebarService } from '../../services/slidebar.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  open$: Observable<boolean>;

  constructor(private sidebar: SlidebarService) {
    this.open$ = this.sidebar.open$;
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }
}
