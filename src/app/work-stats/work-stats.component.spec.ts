import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStatsComponent } from './work-stats.component';

describe('WorkStatsComponent', () => {
  let component: WorkStatsComponent;
  let fixture: ComponentFixture<WorkStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
