import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAndStoryComponent } from './post-and-story.component';

describe('PostAndStoryComponent', () => {
  let component: PostAndStoryComponent;
  let fixture: ComponentFixture<PostAndStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAndStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAndStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
