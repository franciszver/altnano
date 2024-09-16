import { Component } from '@angular/core';
import { AuthorDetailsComponent } from "../author-details/author-details.component";
import { WorkListComponent } from "../work-list/work-list.component";

@Component({
  selector: 'app-left-nav',
  standalone: true,
  imports: [AuthorDetailsComponent, WorkListComponent],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.scss'
})
export class LeftNavComponent {

}
