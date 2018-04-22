import { Action } from '@ngrx/store';

export interface DashboardState {
    colors: string[];
}

const initialState = {
    colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple'
    ]
};

export function dashboardReducer(
    state: DashboardState = initialState,
    action: Action
) {
    switch (action.type) {
        default:
            return state;
    }
}
