console.log("connected")

class Book
{
    constructor(name,author,price)
    {
       
        this.name = name;
        this.author  = author;
        this.price = price;
    }
   
}

class UI
{
   // static displayBooks()
    //{ 
    //     const books = [{name:"the last key",
    //                   author:"sachin",
    //                   price:2000
    //                 },
    //                 { name:"spiderman",
    //                   author:"sachin kumar",
    //                   price:3000

    //                 }
    //             ];
        
    //    books.forEach((data)=>{
    //        UI.addBooksToList(data)
    //    })            
    //}
     static addBooksToList(book)
     {
         let place = document.querySelector('#list-item')
         //console.log(place)
         //let place2 = document.getElementById('addeditem')
         //console.log(place2)
         let row = document.createElement('tr')
           row.innerHTML =` 
           <td>${book.name}</td>
           <td>${book.author}</td>
           <td>${book.price}</td>
            <button class='btn btn-danger'>delete</button>
           `;
           
           place.appendChild(row)
              //UI.showAlert("book-added",'success')

     }
           static showAlert(message,className)
           {
               let div = document.createElement('div')
               div.className = `alert alert-${className}`
               div.appendChild(document.createTextNode(message))
               let container = document.querySelector('.container')
               let form = document.querySelector('#book-form')
               container.insertBefore(div,form)

               setTimeout(()=>document.querySelector('.alert').remove(),500)
           }
     static deleteBook(el)
     {  
         if(confirm('do you really want to delete!!!'))
            {el.parentNode.remove()
                UI.showAlert('book deleted','danger')
              
            }    
         //console.log(el.parentNode.remove())
         else 
            console.log(el.targetValue + 'not deleted')         
    } 
    
}


///////////////Event Listener////////////////////////

//document.addEventListener('DOMContentLoaded',UI.displayBooks())

document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.querySelector('#book-name').value;
    let author = document.querySelector('#book-author').value;
    let price = document.querySelector('#book-price').value;

    const a = new Book(name,author,price)
    UI.showAlert('book added','success')
    UI.addBooksToList(a)
    
})

//UI.displayBooks();

////deleting a book/////////////

document.querySelector('.table').addEventListener('click',(e)=>{
    UI.deleteBook(e.target)
}
)