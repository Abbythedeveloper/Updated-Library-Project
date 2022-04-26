
function findAuthorById(authors, id) {
 return authors.find((author)=>author.id === id)
  }
function findBookById(books, id) {
  return books.find((book)=> id === book.id)
  } 

function partitionBooksByBorrowedStatus(books){
  //// don't need to loop through all of the borrow .. that's why book.borrow[0]
  let result = [];
  let firstArray = books.filter((book)=>book.borrows[0].returned === false)
  let secondArray = books.filter((book)=>book.borrows[0].returned === true)
  result.push(firstArray);
  result.push(secondArray);
  return result;
}

  function getBorrowersForBook(book, accounts) {
  //account objects that represents the accounts given by the IDs in the provided book's `borrows` array.
    const {borrows} = book;
    let output = []
    let returnlist = []
    for(let borrow in borrows){
      for(let account in accounts){
        if(borrows[borrow].id=== accounts[account].id){
          accounts[account].returned = borrows[borrow].returned
          //accounts object -> returned value
        output.push(accounts[account])
        
        }
      }
    }
  for(let i=0; i<10; i++){
    if(output[i]){
      returnlist.push(output[i])
    }
  }
  return returnlist
  }










module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
}




