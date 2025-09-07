import { Component } from '@angular/core';
import { SlidebarService } from '../../services/slidebar.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slidebar',
  imports: [CommonModule],
  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css'
})
export class SlidebarComponent {
 open$: Observable<boolean>;

  constructor(private sidebar: SlidebarService) {
    this.open$ = this.sidebar.open$;
  }

  close() {
    this.sidebar.close();
  }
}
