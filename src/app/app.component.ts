import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SkandiaComponent } from './pages/skandia/skandia.component';
import { SlidebarComponent } from './component/slidebar/slidebar.component';
import { CardsComponent } from './component/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import SwiperCore from 'swiper';



@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, FooterComponent, HeaderComponent,SkandiaComponent, SlidebarComponent, CardsComponent , HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-skandia';
}
