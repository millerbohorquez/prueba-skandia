import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SkandiaComponent } from './pages/skandia/skandia.component';
import { SlidebarComponent } from './component/slidebar/slidebar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent,SkandiaComponent, SlidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-skandia';
}
