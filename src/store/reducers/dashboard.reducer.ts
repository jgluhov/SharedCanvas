import { Action } from '@ngrx/store';
import { Color } from '@models';

export interface DashboardState {
    colors: Color[];
}

export function dashboardReducer(
    state,
    action: Action
) {
    switch (action.type) {
        default:
            return state;
    }
}
