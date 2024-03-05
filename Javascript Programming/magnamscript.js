const http = require('http');

function getFilteredPostsByTitle(title) {
  const url = 'http://jsonplaceholder.typicode.com/posts';

  http.get(url, (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    response.on('end', () => {
      try {
        const posts = JSON.parse(data);

        // Filter the posts based on the provided title
        const filteredPosts = posts.filter(post => post.title.includes(title));

        // Console log the filtered posts
        console.log(filteredPosts);
      } catch (error) {
        console.error(`Error parsing JSON: ${error.message}`);
      }
    });
  }).on('error', (error) => {
    console.error(`Error making HTTP request: ${error.message}`);
  });
}

// Example: Get posts with title containing "Magnam"
getFilteredPostsByTitle("Magnam");
