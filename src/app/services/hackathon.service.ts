import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { apiCollection } from '../data';
import { ApiInterface, HackathonInterface } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class HackathonService {
  public generate$(): Observable<HackathonInterface> {
    const indexes = this.getRandomIndexes(apiCollection.length, 3);

    const collection = apiCollection.filter((value: ApiInterface, index: number) => indexes.includes(index));

    return of({ apiCollection: collection });
  }

  private getRandomIndexes(length: number, amount: number): number[] {
    const randomNumbers: number[] = [];

    Array.from(Array(amount)).forEach(() => {
      const index = this.getRandomIndex(length, randomNumbers);
      randomNumbers.push(index);
    });

    return randomNumbers;
  }

  private getRandomIndex(length: number, excluded: number[]): number {
    let index = -1;

    while (index < 0 || excluded.includes(index)) {
      index = Math.floor(Math.random() * length);
    }

    return index;
  }
}
