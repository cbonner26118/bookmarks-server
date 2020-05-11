const uuid = require('uuid/v4');

const bookmarks = [
  {
    id: uuid(),
    title: 'Thinkful',
    url: 'https://www.thinkful.com',
    description: 'Think outside the classroom',
    rating: 5,
  },
  {
    id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where we find everything else',
    rating: 4,
  },
  {
    id: uuid(),
    title: 'MDN',
    url: 'https://developer.mozilla.org',
    description: 'The only place to find web documentation',
    rating: 5,
  },
  {
    id: uuid(),
    title: 'GitHub',
    url: 'https://www.github.com',
    description: 'Greatest hub of file transfers there is',
    rating: 5,
  },
  {
    id: uuid(),
    title: 'LinkedIn',
    url: 'https://www.linkedin.com',
    description:
      'Networking, job searching, and professional social media',
    rating: 4,
  },
];

module.exports = { bookmarks };
