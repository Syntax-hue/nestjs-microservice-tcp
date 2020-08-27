import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
    accumulate(data: number[]): number {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        return data.reduce(reducer);
    }
}
