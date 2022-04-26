
function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedCount = 0
  for(let book in books){
    let {borrows} = books[book]
    // let borrow = books[book].borrows로 바꿔도괜찮음.//
    borrows.forEach(item => {
      if(item.returned===false){borrowedCount+=1}
    });
  }
  return borrowedCount
}










/*
  [
    { name: "Nonfiction", count: 9 },
    { name: "Historical Fiction", count: 7 },
    { name: "Thriller", count: 7 },
  ]
*/

function getMostCommonGenres(books) {
 let genres = {};
 books.forEach(book => {
  if(!genres[book.genre]){
    genres[book.genre] = 1
  }
  else{
    genres[book.genre]++
    
  }
 })
 let ordered = [];
 for(let genre in genres){
   ordered.push([genre,genres[genre]]);
 }

 ordered.sort((x,y)=>x[1]<y[1] ? 1:-1);
 //Sort all of the genres in descending order by their count property
  
 let output = []
 for(let i =0; i<5; i++){
   output.push({name:ordered[i][0],count:ordered[i][1]})
   
 } 
 return output
}

//console.log(genres)
// {
//   'Historical Fiction': 1,
//   Science: 1,
//   Classics: 2,
//   Travel: 1,
//   'Young Adult': 1,
//   Nonfiction: 1
// }
// => FInal
// {
//   'Historical Fiction': 1,
//   Science: 2,
//   Classics: 2,
//   Travel: 1,
//   'Young Adult': 1,
//   Nonfiction: 1
// }

// =>console.log(ordered)

// {
//   'Historical Fiction': 1,
//   Science: 3,
//   Classics: 2,
//   Travel: 1,
//   'Young Adult': 1,
//   Nonfiction: 1
// }


// [
//   [ 'Historical Fiction', 1 ] 
//  ]
 
//   [ 
//  [ 'Historical Fiction', 1 ], 
//  [ 'Science', 3 ] 
//   ]
 
//  [
//   [ 'Historical Fiction', 1 ],
//   [ 'Science', 3 ],
//   [ 'Classics', 2 ] 
 
//  ]
 
 
//  [
//    [ 'Historical Fiction', 1 ],
//    [ 'Science', 3 ],
//    [ 'Classics', 2 ],
//    [ 'Travel', 1 ]
//  ]
 
 
//  [
//    [ 'Historical Fiction', 1 ],
//    [ 'Science', 3 ],
//    [ 'Classics', 2 ],
//    [ 'Travel', 1 ],
//    [ 'Young Adult', 1 ]
//  ]
 
/// => FInal
//  [
//    [ 'Historical Fiction', 1 ],
//    [ 'Science', 3 ],
//    [ 'Classics', 2 ],
//    [ 'Travel', 1 ],
//    [ 'Young Adult', 1 ],
//    [ 'Nonfiction', 1 ]
//  ]
     
// after sorting

// [
//   [ 'Science', 3 ],
//   [ 'Classics', 2 ],
//   [ 'Nonfiction', 1 ],
//   [ 'Young Adult', 1 ],
//   [ 'Travel', 1 ],
//   [ 'Historical Fiction', 1 ]
// ]


// console.log(output)
// [ { name: 'Science', count: 3 } ]

// [ { name: 'Science', count: 3 }, { name: 'Classics', count: 2 } ]
// [
//   { name: 'Science', count: 3 },
//   { name: 'Classics', count: 2 },
//   { name: 'Nonfiction', count: 1 }
// ]

// [
//   { name: 'Science', count: 3 },
//   { name: 'Classics', count: 2 },
//   { name: 'Nonfiction', count: 1 },
//   { name: 'Young Adult', count: 1 }
// ]

//FInal
// [
//   { name: 'Science', count: 3 },
//   { name: 'Classics', count: 2 },
//   { name: 'Nonfiction', count: 1 },
//   { name: 'Young Adult', count: 1 },
//   { name: 'Travel', count: 1 }
// ]

  // [
  //   { name: "Nonfiction", count: 9 },
  //   { name: "Historical Fiction", count: 7 },
  //   { name: "Thriller", count: 7 },
  
function getMostPopularBooks(books) {
  let genres = {};
  books.forEach(book => {
    genres[book.title] = book.borrows.length;
    
  })

   let ordered = [];
   for(let genre in genres){
    ordered.push([genre,genres[genre]]);
   }
 

  ordered.sort((x,y)=>x[1]<y[1] ? 1:-1);
  let output = []
    for(let i =0; i<5; i++){
     output.push({name:ordered[i][0],count:ordered[i][1]})
   } 
  // return output
  return output

  // //Sort all of the genres in descending order by their count property
 }
 

 function getMostPopularAuthors(books, authors){
  // we are going to use reduce to get an array of objects that have.
  const authorList = books.reduce((acc,book)=>{
  // grab the authorId and borrows array
  const{authorId,borrows}=book;
  //get the authorObj
  const authorObj = authors.find(author=> author.id ===authorId);
// { id: 37, name: { first: 'Cristina', last: 'Buchanan' } }
// { id: 8, name: { first: 'Susanne', last: 'Lawson' } }
// { id: 10, name: { first: 'Giles', last: 'Barlow' } }...

//build the author name from the authorObj
  const name =`${authorObj.name.first} ${authorObj.name.last}`
  // Cristina Buchanan
  // Susanne Lawson
  // Giles Barlow

//get the number of times this book has been borrowed
const count = borrows.length;
// 2
// 11
// 4
// see if we already have an entry for this author in the accomulator
const authExists = acc.find(auth=> auth.name === name);
if(authExists){
  authExists.count += count;
} else {
  const newAuthEntry ={
    name,
    count
  };
  // { name: 'Cristina Buchanan', count: 2 }
  acc.push(newAuthEntry)
}
// [ { name: 'Cristina Buchanan', count: 2 } ]
  return acc;
  },[]) 

// [
//   { name: 'Cristina Buchanan', count: 2 },
//   { name: 'Susanne Lawson', count: 11 },
//   { name: 'Giles Barlow', count: 4 },
//  ]

// sort in descending order by count.
const sortedAuthorList = authorList.sort((a,b)=>b.count - a.count);
// [
//   { name: 'Susanne Lawson', count: 11 },
//   { name: 'Matthews Sanders', count: 5 },
//   { name: 'Giles Barlow', count: 4 }]

 // get the top five.
 const topFive = sortedAuthorList.slice(0,5);
//  [
//   { name: 'Susanne Lawson', count: 11 },
//   { name: 'Matthews Sanders', count: 5 },
//   { name: 'Giles Barlow', count: 4 },
//   { name: 'Tate Fletcher', count: 4 },
//   { name: 'Ochoa Levy', count: 3 }
// ]
//return the top five.
return topFive;
}












//  [
//   { name: "Cristina Buchanan", count: 112 },
//   { name: "Tami Hurst", count: 83 },
//   { name: "Chrystal Lester", count: 80 },
// ]








module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
