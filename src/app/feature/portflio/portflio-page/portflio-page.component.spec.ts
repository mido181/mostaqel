import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortflioPageComponent } from './portflio-page.component';

describe('PortflioPageComponent', () => {
  let component: PortflioPageComponent;
  let fixture: ComponentFixture<PortflioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortflioPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortflioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
