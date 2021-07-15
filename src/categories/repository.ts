interface Category {
    id: number,
    name: string,
    image: string
}

export const categories: Category[] = [
    {   
        id:1,
        name:'Action (set A)',
        image:'dance.jpg'
    },
    {
        id:2,
        name: 'Action (set B)',
        image:'swim.jpg'
    },
    {
        id:3,
        name: 'Action (set C)',
        image: 'drive.jpg'
    },
    {
        id:4,
        name: 'Adjective',
        image:'small.jpg'
    },
    {
        id:5,
        name: 'Animal (set A)',
        image: 'cat.jpg'
    },
    {
        id:6,
        name: 'Animal (set B)',
        image:'bird.jpg'
    },
    {
        id:7,
        name: 'Clothes',
        image: 'blouse.jpg'
    },
    {
        id:8,
        name: 'Emotion',
        image: 'happy.jpg'
    }
    

];

export const categoriesArr = [
    'Action (set A)',
    'Action (set B)',
    'Action (set C)',
    'Adjective',
    'Animal (set A)',
    'Animal (set B)',
    'Clothes',
    'Emotion',
  ];

  export function getCategories():Promise<Category[]>{
      return Promise.resolve(categories);
  }

  export function getCategoriesByName(catName:string):Promise<Category|undefined>{
      const category = categories.find((cat)=>cat.name === catName);
      return Promise.resolve(category);
  }

  export function getCategoriesById(id:number):Promise<Category|undefined>{
    const category = categories.find((cat)=>cat.id === id);
    return Promise.resolve(category);
}