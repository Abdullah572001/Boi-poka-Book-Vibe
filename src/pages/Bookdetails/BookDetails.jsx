import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setBooksToLocalStorage } from '../../utility/addToDB';

const BookDetails = () => {

    const {id} = useParams();
    const books = useLoaderData();
    const book = books.find(singleBook => singleBook.bookId === parseInt(id));
    // console.log(book)
    const {image, bookName} = book;

    const handleMarkAsRead = id => {
        setBooksToLocalStorage(id);
    }

    return (
        <div className='max-w-6xl mx-auto p-16 space-y-6'>
            <img className='w-33.5 h-50 object-cover' src={image} alt="" />
            <h2>{bookName}</h2>
            <button onClick={()=> handleMarkAsRead(id)} className='btn btn-info mr-5 mb-0'>Mark as Read</button>
            <button className='btn btn-success'>Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;