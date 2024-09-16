import { Component } from '@angular/core';

@Component({
  selector: 'app-work-title',
  standalone: true,
  imports: [],
  templateUrl: './work-title.component.html',
  styleUrl: './work-title.component.scss'
})
export class WorkTitleComponent {
  public work_details: any = {
    title: "Starting title",
    summary: "This is the summmary of this starting title"
  }

  constructor(){}
}
