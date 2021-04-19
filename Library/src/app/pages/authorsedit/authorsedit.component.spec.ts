import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorseditComponent } from './authorsedit.component';

describe('AuthorseditComponent', () => {
  let component: AuthorseditComponent;
  let fixture: ComponentFixture<AuthorseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
