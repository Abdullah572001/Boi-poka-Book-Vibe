import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooksFromLocalStorage } from "../../utility/addToDB";

const ListedBooks = () => {

    const [listedBooks, setListedBooks] = useState([])

    const books = useLoaderData();

    useEffect(()=>{
        const storedBooksData = getStoredBooksFromLocalStorage().map(id => parseInt(id));
        const readBooks = books.filter(book => storedBooksData.includes(book.bookId));
        setListedBooks(readBooks)
    },[books])

  return (
    <div className="max-w-6xl mx-auto py-20">
        <div className="p-6 bg-gray-100 rounded-2xl mb-10">
            <h2 className="font-bold text-2xl text-center">Books</h2>
        </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content {listedBooks.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
