import { Component } from '@angular/core';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.scss'
})
export class AuthorDetailsComponent {

  public first_name: string = "FirstName";
  public last_name: string = "LastName";
  public blurb: string = "blurby blurb";

  constructor() {}


}
