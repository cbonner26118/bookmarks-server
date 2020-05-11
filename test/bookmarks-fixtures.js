function makeBookmarksArray() {
  return [
    {
      id: 1,
      title: 'Test bookmark one',
      url: 'testbookmarkone.com',
      description: 'This is the first test bookmark',
      rating: 5,
    },
    {
      id: 2,
      title: 'Test bookmark two',
      url: 'testbookmarktwo.com',
      description: 'This is the second test bookmark',
      rating: 2,
    },
    {
      id: 3,
      title: 'Test bookmark three',
      url: 'testbookmarkthree.com',
      description: 'This is the third test bookmark',
      rating: 3,
    },
    {
      id: 4,
      title: 'Test bookmark four',
      url: 'testbookmarkfour.com',
      description: 'This is the fourth test bookmark',
      rating: 4,
    },
    {
      id: 5,
      title: 'Test bookmark five',
      url: 'testbookmarkfive.com',
      description: 'This is the fifth test bookmark',
      rating: 1,
    },
  ];
}

module.exports = {
  makeBookmarksArray,
};
