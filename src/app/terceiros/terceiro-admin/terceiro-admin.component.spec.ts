import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiroAdminComponent } from './terceiro-admin.component';

describe('TerceiroAdminComponent', () => {
  let component: TerceiroAdminComponent;
  let fixture: ComponentFixture<TerceiroAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
