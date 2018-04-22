import uniqid from 'uniqid';

export class Color {
    id: string = uniqid();
    constructor(public name: string) {
    }
}
