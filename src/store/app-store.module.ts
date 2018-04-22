import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './reducers';

@NgModule({
    imports: [
        StoreModule.forRoot({
            dashboard: dashboardReducer
        }),
    ],
    exports: [
        StoreModule
    ]
})
export class AppStoreModule {}
