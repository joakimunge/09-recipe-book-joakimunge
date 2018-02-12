import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, title: 'Pasta thing', image: 'http://static.food2fork.com/pestoa0e7.jpg' },
      { id: 12, title: 'Other pasta thing', image: 'http://static.food2fork.com/7944232460_d833528bc615f4.jpg' },
      { id: 13, title: 'Food thing', image: 'http://static.food2fork.com/7944232460_d833528bc615f4.jpg' },
      { id: 14, title: 'Recipe with stuff', image: 'http://static.food2fork.com/7944232460_d833528bc615f4.jpg' },
      { id: 15, title: 'Other stuff', image: 'http://static.food2fork.com/7944232460_d833528bc615f4.jpg' },
      { id: 16, title: 'Another recipe but with chieken', image: 'http://static.food2fork.com/7944232460_d833528bc615f4.jpg' },
      { id: 17, title: 'Sikkundinor', image: 'http://static.food2fork.com/7944232460_d833528bc615f4.jpg' },
      { id: 18, title: 'Winordinorsikunfinor', image: 'http://static.food2fork.com/7944232460_d833528bc615f4.jpg' },
      { id: 19, title: 'Perfectfoodman', image: 'http://static.food2fork.com/7944232460_d833528bc615f4.jpg' },
      { id: 20, title: 'Lienozno', image: 'http://static.food2fork.com/7944232460_d833528bc615f4.jpg' }
    ];
    return {recipes};
  }
}