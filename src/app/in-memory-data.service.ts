import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, title: 'Pasta thing' },
      { id: 12, title: 'Other pasta thing' },
      { id: 13, title: 'Food thing' },
      { id: 14, title: 'Recipe with stuff' },
      { id: 15, title: 'Other stuff' },
      { id: 16, title: 'Another recipe but with chieken' },
      { id: 17, title: 'Sikkundinor' },
      { id: 18, title: 'Winordinorsikunfinor' },
      { id: 19, title: 'Perfectfoodman' },
      { id: 20, title: 'Lienozno' }
    ];
    return {recipes};
  }
}