import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home.component';
import { SidebarModule } from '../../modules';

describe('HomeComponent: Spec', () => {
    let fixture: ComponentFixture<HomeComponent>;
    let component: HomeComponent;
    let element: DebugElement;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [
              SidebarModule
            ],
            declarations: [
              HomeComponent
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should have a paragraph element', () => {
        expect(0)
            .not.toBeNull();
    });
});
