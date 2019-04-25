import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];
  addArticle(title: HTMLInputElement, link: HTMLInputElement) : boolean {
    console.log(`Adding article title : ${title.value} and link : ${link.value}`);
    return false;
  } 


  constructor() {
    this.articles = [new Article(
      'Angular 2',
      'http://angular.io',
      10
    ),
    new Article(
      'Fullstack',
      'http://angular.io',
      20
    ),
    new Article(
      'Homepage',
      'http://angular.io',
      1
    )];

  }
}
