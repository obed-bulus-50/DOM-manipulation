// higher array method
//const projects = [
 // { title: "Portfolio", category: "html", year: 2024 },
  //{ title: "Quiz App",  category: "js",   year: 2024 },
  //{ title: "Blog",      category: "js",   year: 2025 },
//];

// forEach — loop through every item, return nothing
//projects.forEach(p => console.log(p.title));
// "Portfolio", "Quiz App", "Blog"

// map — transform every item, return NEW array
//const titles = projects.map(p => p.title);
// ["Portfolio", "Quiz App", "Blog"]

// filter — keep only items that match, return NEW array
//const jsProjects = projects.filter(p => p.category === "js");
// [{ title: "Quiz App" ... }, { title: "Blog" ... }]

// find — return the FIRST item that matches
//const blog = projects.find(p => p.title === "Blog");
// { title: "Blog", category: "js", year: 2025 }

// some — true if AT LEAST ONE item matches
//projects.some(p => p.year === 2025)  // true

// every — true if ALL items match
//projects.every(p => p.year === 2024) // false

// reduce — collapse array to a single value
//const years = [2024, 2024, 2025];
//const sum = years.reduce((total, y) => total + y, 0);  // 6073