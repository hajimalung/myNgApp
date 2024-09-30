import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlrPanelComponent } from './tlr-panel.component';

describe('TlrPanelComponent', () => {
  let component: TlrPanelComponent;
  let fixture: ComponentFixture<TlrPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TlrPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TlrPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
