// Chapter10_Discover functional programming
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter10.md


// Functional Programming
// Functional programming is about writing programs by combining functions 
// expressing what the program should do, rather than how to do it (which is the imperative way).
/*
const movieList = [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4
    },
    {
      title: "Batman & Robin",
      year: 1997,
      director: "Joel Schumacher",
      imdbRating: 3.7
    },
    {
      title: "Batman Begins",
      year: 2005,
      director: "Christopher Nolan",
      imdbRating: 8.3
    },
    {
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      imdbRating: 9.0
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      director: "Christopher Nolan",
      imdbRating: 8.5
    }
];
*/

// Array Operations
// Functional programming is about writing programs by combining functions expressing what the program should do, rather than how to do it. 
// JavaScript offers several array-related methods that favor a functional programming style.

// map() method
// takes an array as a parameter and creates a new array with the results of calling a provided function on every element in the given array.

/*
const titles = movies => {
    const titles = [];
    for (const movie in movies){
        titles.push(movie.title);
    }
    return titles;
}

const titles = movie.map(movie => movie.titles);
*/


// filter() method
// test every element of an array against the given function/contion. Only elements that pass this test are added to the returned array

const number = [1, 5, 10, 15];
const bigOnes = numbers.filter(x => x >= 10);
console.log(numbers);
console.log(bigOnes);


// reduce() method
// applies a provided function to each array element in order to reduce it to one value.
// This method is typically used to perform calculations on an array.

const sum = numbers.reduce((acc, val) => acc + val, 0);

console.log(sum);
/*
const averageRating = movies => {
    let ratingSum = 0;
    for (const movie in movies) {
        ratingSum += movie.imdbRating;
    }
    return ratingSum / movies.length;
}

const averageRating = movies => {
    let ratingSum = movies.reduce((sum, val) => sum + val.imdbRating, 0);
    return ratingSum / movies.length;
}
*/

// Higher-order functions
// Functions are treated equal to other types, objects.
// Functions can be combined together, rendering programs even more expressive and enabling a truly functional programming style.
// A fuction that takes another function as a parameter or returns another function is called a higher-order function.
/*
const titles = movies => movies.map(movie => movie.title);
const byDirector = (movie, directorName) => movie.director === directorName;
const filter = (movies, func) => movies.filter(func);
const goodRating = movie => movie.imdbRating >= 7.5;
const rating = movies => movies.map(movie => movie.imdbRating);
const average = array => array.reduce((sum, val) => sum + val, 0) / array.length;

console.log((titles(movieList)));
const nolanMovieList = filter(movieList, movie => byDirector(movie, "Christopher Nolan"));
console.log(nolanMovieList.length);
console.log(titles(filter(movieList, goodRating)));
console.log(average(rating(nolanMovieList)));
*/


// Older Movies
// Improve the example movie program from above so that it shows the titles of movies released before year 2000, using functional programming.
/*
const movieList = [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4
    },
    {
      title: "Batman & Robin",
      year: 1997,
      director: "Joel Schumacher",
      imdbRating: 3.7
    },
    {
      title: "Batman Begins",
      year: 2005,
      director: "Christopher Nolan",
      imdbRating: 8.3
    },
    {
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      imdbRating: 9.0
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      director: "Christopher Nolan",
      imdbRating: 8.5
    }
  ];
  
  // TODO: Make an array of the titles of movies released before 2000
  const moviesBefore2000 = movieList.filter(movie => movie.year < 2000).map(movie => movie.title);
  
  console.log(moviesBefore2000);

*/

// Goverment forms
// Complete the following program to compute and show the names of political forms ending with "cy".
/*
const governmentForms = [
    {
      name: "Plutocracy",
      definition: "Rule by the wealthy"
    },
    {
      name: "Oligarchy",
      definition: "Rule by a small number of people"
    },
    {
      name: "Kleptocracy",
      definition: "Rule by the thieves"
    },
    {
      name: "Theocracy",
      definition: "Rule by a religious elite"
    },
    {
      name: "Democracy",
      definition: "Rule by the people"
    },
    {
      name: "Autocracy",
      definition: "Rule by a single person"
    }
  ];
  
  // TODO: compute the formsEndingWithCy array
  const formsEndingWithCy = governmentForms.filter(form => form.name.endsWith('cy')).map(form => form.name);
  
  // Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]
  console.log(formsEndingWithCy);

  */


// Arrays sum
// Complete the following program to compute and show the total sum of the values in each of the arrays.
/*
const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable
const arraysSum = arrays.map(arr => arr.reduce((sum, val) => sum + val, 0)).reduce((sum, val) => sum + val, 0);
console.log(arraysSum); // Should show 31
*/


// Student results
// Here's a program that shows female students results (name and average grade).

const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

// Compute female student results
const femaleStudentsResults = [];
for (const student of students) {
  if (student.sex === "f") {
    let gradesSum = 0;
    for (const grade of student.grades) {
      gradesSum += grade;
    }
    const averageGrade = gradesSum / student.grades.length;
    femaleStudentsResults.push({
      name: student.name,
      avgGrade: averageGrade
    });
  }
}

console.log(femaleStudentsResults);

// Refactor it using functional programming. Execution result must stay the same.

const filter = (array, func) => array.filter(func);
const femaleFilter = student => student.sex === 'f';
const average = array => array.reduce((acc, val) => acc + val, 0) / array.length;
const results = student => ({
    name: student.name,
    avgGrade: average(student.grades)
});
const femaleStudentsResults2 = filter(students, femaleFilter).map(elem => results(elem));
console.log(femaleStudentsResults2);
