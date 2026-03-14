import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ books }) => {
  return (
    <div>
      <h2 className="text-center text-xl font-bold">Books</h2>
      <div className="grid lg:grid-cols-3 gap-10">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
