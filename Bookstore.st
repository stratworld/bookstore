service Frontend {
  include "Http"

  Http { method: "get", path: "/"} -> "./index.html"
  Http { method: "get", path: "/client.js"} -> "./client.js"
  Http { method: "get", path: "/api/books" } -> Books.getBooks
}

service Books {
  getBooks ():any -> "./getBooks.js"
}

service Sales {
  getSales ():any -> "./getSales.js"
}
