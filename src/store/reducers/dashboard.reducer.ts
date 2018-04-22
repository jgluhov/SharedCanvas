import { Action } from '@ngrx/store';
import { Color } from '@models';

export interface DashboardState {
    colors: Color[];
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
    .map((name: string) => new Color(name))
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
