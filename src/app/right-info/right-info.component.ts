import { Component } from '@angular/core';
import { WorkDetailsComponent } from "../work-details/work-details.component";
import { WorkStatsComponent } from "../work-stats/work-stats.component";
import { WorkGraphComponent } from "../work-graph/work-graph.component";

@Component({
  selector: 'app-right-info',
  standalone: true,
  imports: [WorkDetailsComponent, WorkStatsComponent, WorkGraphComponent],
  templateUrl: './right-info.component.html',
  styleUrl: './right-info.component.scss'
})
export class RightInfoComponent {

}
