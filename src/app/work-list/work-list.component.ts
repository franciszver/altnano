import { Component } from '@angular/core';

@Component({
  selector: 'app-work-list',
  standalone: true,
  imports: [],
  templateUrl: './work-list.component.html',
  styleUrl: './work-list.component.scss'
})
export class WorkListComponent {

  public work_list: any = [
    {id: '0', name: 'work 1', wordCount: '1000'},
    {id: '1', name: 'work 2', wordCount: '1500'},
    {id: '1', name: 'work 2', wordCount: '1500'}
  ]

  constructor(){}

}
