import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DefaultThemeComponent } from './default-theme.component';
import { FooterComponent } from './footer/footer.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

describe('DefaultComponent', () => {
  let component: DefaultThemeComponent;
  let fixture: ComponentFixture<DefaultThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DefaultThemeComponent,
        FooterComponent,
        MainNavigationComponent
      ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});