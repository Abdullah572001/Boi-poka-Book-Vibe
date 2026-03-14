import { toast } from "react-toastify";

const getStoredBooksFromLocalStorage = () => {
  const storedBooksStr = localStorage.getItem("StoredBooks");

  if (storedBooksStr) {
    const storedBooksData = JSON.parse(storedBooksStr);
    return storedBooksData;
  } else {
    return [];
  }
};

const setBooksToLocalStorage = (id) => {
  const storedBooksData = getStoredBooksFromLocalStorage();

  if (storedBooksData.includes(id)) {
    toast("This id is already added");
  } else {
    storedBooksData.push(id);
  }

  const storedBooksStr = JSON.stringify(storedBooksData);
  localStorage.setItem("StoredBooks", storedBooksStr);
};

export { setBooksToLocalStorage, getStoredBooksFromLocalStorage };
