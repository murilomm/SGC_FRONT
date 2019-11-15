import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroListComponent } from './terceiro-list.component';

describe('TerceiroListComponent', () => {
  let component: TerceiroListComponent;
  let fixture: ComponentFixture<TerceiroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
