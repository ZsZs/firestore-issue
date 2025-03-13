import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NxWelcomeComponent } from './nx-welcome.component';

describe("NxWelcomeComponent", () => {
  let component: NxWelcomeComponent;
  let fixture: ComponentFixture<NxWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxWelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NxWelcomeComponent);
    component = fixture.componentInstance;
  })

  it("should be created", () => {
    expect(component).toBeTruthy();
  })
})
