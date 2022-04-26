
function findAccountById(accounts, id) {
  return accounts.find((acc)=> id === acc.id )
}

function sortAccountsByLastName(accounts){
  let result = accounts.sort((a,b)=>a.name.last.toLowerCase()>b.name.last.toLowerCase()? 1:-1)
  return result;
}

function getTotalNumberOfBorrows(account, books){
  let counter = 0;
  books.forEach((book)=>book.borrows.forEach((borrow)=>{
    if(borrow.id === account.id){
      counter ++
    }
  }))
  return counter;
}


// const words = ['one', 'two', 'three', 'four'];
// words.forEach((word) => {
//   console.log(word);
//   if (word === 'two') {
//     words.shift(); //'one' will delete from array
//   }
// }); // one // two // four

// console.log(words); // ['two', 'three', 'four']







//Helper Function
function booksMatchAccountId(books, account) {
  let checkedOutBooksByAccount = books.filter((book) => book.borrows[0].id === account.id && book.borrows[0].returned === false) 
  return checkedOutBooksByAccount
} 
 function getBooksPossessedByAccount(account, books, authors) {
   let bookmatchreturn = booksMatchAccountId(books, account)
   let matchbookputintobooks = bookmatchreturn.map((book) => 
  ({...book, author: authors.find(author => author.id === book.authorId)})); 
   return matchbookputintobooks; }

  //  function getBooksPossessedByAccount(account, books, authors) {

  //   let userID = account.id 
  //   let currentlyBorrowed = []
  //   for (let book in books){
  //     if (userID === books[book].borrows[0].id && books[book].borrows[0].returned === false)      currentlyBorrowed.push(books[book])
  //   }
  //   //it works even it's wrapped with array but bad bad practice.
  //   for (let borrowed in currentlyBorrowed){
  //    let thisBorrow = currentlyBorrowed[borrowed]
  //     for (let author in authors){
  //       if (thisBorrow.authorId === authors[author].id){
  //         thisBorrow.author = authors[author]
  //       }
  //     }
  //   }
  //   return currentlyBorrowed
  // }
  


  // It went wrong while writing the map method. You need to use map() method creates a new array populated with the bookmatchreturn. That represents all books _currently checked out_ by the given account.

  // For example: let matchbookputintobooks = bookmatchreturn.map((book) => ( {...book, author: authors.find(author => author.id === book.authorId)} ));
  
  // Look carefully at the object above, as it's not just the book object; the author object is nested inside of it.














module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};


