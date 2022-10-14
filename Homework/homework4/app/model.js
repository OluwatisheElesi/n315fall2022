var userInfo = {};

var bookList = [ // this is the booklist for the first section
    {
        bookInfo: "The Perfect Sunday Meal",
        bookImg: "squarew.png",

    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
       bookPrice: "$100",
        bookImg: "books/hp-box-set.jpg",
    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
       bookPrice: "$100",
        bookImg: "books/got-box-set.jpg",
    },
]
export function changePage(pageID, callback) {
    console.log(pageID);
    if (pageID =="" || pageID == "login") {
        $.get(`pages/${pageID}.html`, function (data) {
            console.log("data" + data);
            $("#app").html(data);
            callback();
        });
    }else if (pageID == "book"){
        $.get(`pages/${pageID}.html`, function (data){
            // console.log("data " + data);
            $("#app").html(data);
            //this is what will inject when someone is in the books page 
            $.each(bookList,  function(idx, book){ // first set of books
                $(".bookPages").append(`<div class="book">
                <div class="bookImage">
                  <img src="images/${book.bookImg}" alt="" />
                </div>
                <div class="bookInfo">
                  <p class = "infoText">${book.bookInfo}</p>
                  <button id="${idx}">READ ABOUT IT</button>
                </div>
              </div>
            </div>`);
            
            })
           
        });

    }
    // cart
     else {
        $.get(`pages/${pageID}.html`, function (data){
            console.log("data " + data);
            $("#app").html(data);
            $.each(cart, function (idx, cartItem){
                console.log(bookList[cartItem]);
                let book = bookList[cartItem];
                $(".items").append(`<div class="book">

                <div class="bookImage">
                  <img src="images/${book.bookImg}" alt="" />
                </div>
                <div class="bookInfo">
                  <h4>${book.bookTitle}</h4>
                  <p>Price: $${book.price}</p>
                  <p>Qty: 1</p>
                </div>
              </div>
      
            </div>`);
            })
    });
}
}

export function setUserInfo(userObject){
    userInfo = userObject;
    console.log(userInfo);
}

export function addToCart (bookIdx) {
    cart.push(bookIdx);
    $("#cartCount").html(cart.length.toString());
    callback.addToCart("You have added this book to your cart");
}