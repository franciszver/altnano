import { Component } from '@angular/core';
import { WorkStatsComponent } from "../work-stats/work-stats.component";
import { WorkGraphComponent } from "../work-graph/work-graph.component";
import { WorkTitleComponent } from "../work-title/work-title.component";

@Component({
  selector: 'app-work-details',
  standalone: true,
  imports: [WorkStatsComponent, WorkGraphComponent, WorkTitleComponent],
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.scss'
})
export class WorkDetailsComponent {
  constructor(){}

}
