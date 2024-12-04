import { Request, Response } from 'express';
import { BookRepository } from '../repositories/bookRepository';

const bookRepository = new BookRepository();

/**
 * Lista todos os livros.
 */
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookRepository.getAllBooks();
    res.status(200).json(books); // Sucesso: Retorna 200 com os livros
  } catch (error) {
    console.error(error); // Log do erro para depuração
    res.status(500).json({ error: 'Erro ao buscar livros.' }); // Erro interno do servidor
  }
};

/**
 * Adiciona um novo livro.
 */
export const addBook = async (req: Request, res: Response) => {
  const { name, subtitle, image, price } = req.body;

  try {
    // Adiciona o livro no banco de dados
    const book = await bookRepository.addBook(name, subtitle, image, price);
    res.status(201).json(book); // Sucesso: Retorna 201 com os dados do livro
  } catch (error) {
    console.error(error); // Log do erro para depuração
    res.status(500).json({ error: 'Erro ao adicionar o livro.' }); // Erro interno do servidor
  }
};