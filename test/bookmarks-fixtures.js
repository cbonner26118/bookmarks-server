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

function makeMaliciousBookmark() {
  const maliciousBookmark = {
    id: 911,
    title:
      'Naughty naughty very naughty <script>alert("xss");</script>',
    url: 'https://www.hackers.com',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    rating: 1,
  };
  const expectedBookmark = {
    ...maliciousBookmark,
    title:
      'Naughty naughty very naughty &lt;script&gt;alert("xss");&lt;/script&gt;',
    description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
  };
  return {
    maliciousBookmark,
    expectedBookmark,
  };
}

module.exports = {
  makeBookmarksArray,
  makeMaliciousBookmark,
};
