import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesHubComponent } from './quotes-hub.component';

describe('QuotesHubComponent', () => {
  let component: QuotesHubComponent;
  let fixture: ComponentFixture<QuotesHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
