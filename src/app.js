require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { v4: uuid } = require('uuid');
const logger = require('./logger');
const { NODE_ENV, API_TOKEN } = require('./config');
const BookmarksService = require('./bookmarks-service');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(function validateBearerToken(req, res, next) {
  const authToken = req.get('Authorization');

  if (!authToken || authToken.split(' ')[1] !== API_TOKEN) {
    logger.error(`Unauthorized request to path: ${req.path}`);
    return res.status(401).json({ error: 'Unauthorized request' });
  }

  next();
});

app.get('/bookmarks', (req, res, next) => {
  const knexInstance = req.app.get('db');

  BookmarksService.getBookmarks(knexInstance)
    .then((bookmarks) => {
      res.json(bookmarks);
    })
    .catch(next);
});

app.post('/bookmarks', (req, res) => {
  const { title, url, rating, description } = req.body;

  if (!title) {
    logger.error(`Title is required`);
    return res.status(400).send('Title is required');
  }

  if (!url) {
    logger.error(`URL is required`);
    return res.status(400).send('URL is required');
  }

  if (!url.match(/^(ftp|http|https):\/\/[^ "]+$/)) {
    logger.error(`Must be a valid URL`);
    return res.status(400).send('Valid URL required');
  }

  if (!rating) {
    logger.error(`Rating is required`);
    return res.status(400).send('Rating is required');
  }

  if (rating < 1 || rating > 5) {
    logger.error(`Rating must be between 1 and 5`);
    return res.status(400).send('Rating must be between 1 and 5');
  }

  if (!description) {
    logger.error(`Description is required`);
    return res.status(400).send('Description is required');
  }

  const id = uuid();
  const bookmark = {
    id,
    title,
    url,
    rating,
    description,
  };

  bookmarks.push(bookmark);

  logger.info(`Bookmark with id ${id} created`);

  res
    .status(201)
    .location(`http://localhost:8000/bookmarks/${id}`)
    .json(bookmark);
});

app.get('/bookmarks/:id', (req, res, next) => {
  const knexInstance = req.app.get('db');

  BookmarksService.getBookmarksById(knexInstance, req.params.id)
    .then((bookmark) => {
      if (!bookmark) {
        logger.error(`Bookmark with id ${id} not found`);
        return res.status(404).json({
          error: { message: 'Bookmark Not Found' },
        });
      }
      res.json(bookmark);
    })
    .catch(next);
});

app.delete('/bookmarks/:id', (req, res) => {
  const { id } = req.params;
  const bookmarkIndex = bookmarks.findIndex((b) => b.id == id);

  if (bookmarkIndex === -1) {
    logger.error(`Bookmark with id ${id} not found.`);
    return res.status(404).send('Bookmark not found');
  }

  bookmarks.splice(bookmarkIndex, 1);

  logger.info(`Bookmark with id ${id} deleted.`);

  res.status(204).end();
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
