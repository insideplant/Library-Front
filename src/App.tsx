import React, { useState } from 'react';
import './App.css';
import { getAllBooks } from './ApiFetch';
import { ThemeContext } from '@emotion/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function App() {

  type book = {
    isbn: number;
    name: String;
    publisher: String;
    author:  String;
  }

  const [books, setBooks] = useState<book[]>([]);

  const getBooks = ():void => {
    console.log(books)
    getAllBooks()
      .then(books => {        
        setBooks(books)        
    });    
  }
  
  return (
    <div className="App">
      <header className="App-header">
          <button onClick={getBooks}>Fetch Books</button>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow
              key={book.isbn}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {book.name}
              </TableCell>
              <TableCell align="right">{book.isbn}</TableCell>
              <TableCell align="right">{book.name}</TableCell>
              <TableCell align="right">{book.author}</TableCell>
              <TableCell align="right">{book.publisher}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
      </header>
    </div>
  );
}

export default App;
