import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  //   console.log(book);

  const { bookId, bookName, author, image } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="">
        <div className="card bg-base-100 w-96 shadow-sm p-6">
          <figure className="bg-gray-200 p-8">
            <img className="w-33.5 h-48 object-cover" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Card Title
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
