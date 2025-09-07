import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SkandiaComponent } from './pages/skandia/skandia.component';
import { SlidebarComponent } from './component/slidebar/slidebar.component';
<<<<<<< HEAD
import { CardsComponent } from './component/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import SwiperCore from 'swiper';

=======
>>>>>>> 3a6db11fd64012ac57e18b10fc2475ef21de246a


@Component({
  selector: 'app-root',
<<<<<<< HEAD
  standalone: true,  
  imports: [RouterOutlet, FooterComponent, HeaderComponent,SkandiaComponent, SlidebarComponent, CardsComponent , HttpClientModule],
=======
  imports: [RouterOutlet, FooterComponent, HeaderComponent,SkandiaComponent, SlidebarComponent],
>>>>>>> 3a6db11fd64012ac57e18b10fc2475ef21de246a
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-skandia';
}
