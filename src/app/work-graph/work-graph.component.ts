import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-work-graph',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './work-graph.component.html',
  styleUrl: './work-graph.component.scss'
})
export class WorkGraphComponent {
  surveyData = [
    { name: '1', value: 1667 },
    { name: '2', value: 3334 },
    { name: '3', value: 5001 },
    { name: '4', value: 6668 },
    { name: '5', value: 8335 },
    { name: '6', value: 10002 },
    { name: '7', value: 11669 },
    { name: '8', value: 13336 },
    { name: '9', value: 15003 },
    { name: '10', value: 16670 },
    { name: '11', value: 18337 },
    { name: '12', value: 20004 },
    { name: '13', value: 21671 },
    { name: '14', value: 23338 },
    { name: '15', value: 25005 },
    { name: '16', value: 26672 },
    { name: '17', value: 28339 },
    { name: '18', value: 30006 },
    { name: '19', value: 31673 },
    { name: '20', value: 33340 },
    { name: '21', value: 35007 },
    { name: '22', value: 36674 },
    { name: '23', value: 38341 },
    { name: '24', value: 40008 },
    { name: '25', value: 41675 },
    { name: '26', value: 43342 },
    { name: '27', value: 45009 },
    { name: '28', value: 46676 },
    { name: '29', value: 48343 },
    { name: '30', value: 50000 }
  ];
}
