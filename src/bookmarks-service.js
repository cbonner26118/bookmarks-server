const BookmarksService = {
  getBookmarks(knex) {
    return knex.select('*').from('bookmarks');
  },
  getBookmarksById(knex, id) {
    return knex.from('bookmarks').select('*').where('id', id).first();
  },
};

module.exports = BookmarksService;
