import { BaseEntity } from './../../shared';

export class Activity implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public type?: string,
    ) {
    }
}
