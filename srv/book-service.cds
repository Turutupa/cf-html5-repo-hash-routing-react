using { bookshop as bookshop } from '../db/schema';
service BookshopService @(path:'/browse') {

  @readonly entity Books as SELECT from bookshop.Books {*,
    author.name as author
  } excluding { createdBy, modifiedBy };

  action submitOrder (book : Books.ID, amount: Integer);
}