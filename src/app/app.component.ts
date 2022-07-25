import { Component } from '@angular/core';
import { RecipesService } from './recipes/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipesService]
})
export class AppComponent {
  currentPage: string = 'recipes'

  constructor() {

  }

  onNavigate(section: string) {
    this.currentPage = section;
  }


}
