const faker = require('faker');

function generateArray(genFunc, count, additional) {
  const arrayData = [];
  for (let i = 0; i < count; i++) {
    arrayData.push(genFunc(additional));
  }
  return arrayData;
}

function generatePost() {
  return {
    id: faker.random.number(),
    title: faker.lorem.words(),
    content: faker.lorem.sentences(),
    author: {
      id: faker.random.number(),
      name: faker.fake('{{name.lastName}} {{name.firstName}}'),
      avatar: faker.image.imageUrl()
    },
    created: faker.date.past(),
    updated: faker.date.past(),
    likes: faker.random.number(),
    isLiked: faker.random.boolean()
  };
}

function generateComment(postId) {
  return {
    id: faker.random.number(),
    postId: postId,
    content: faker.lorem.words(),
    author: {
      id: faker.random.number(),
      name: faker.fake('{{name.lastName}} {{name.firstName}}'),
      avatar: faker.image.imageUrl()
    },
    created: faker.date.past(),
    updated: faker.date.past(),
    likes: faker.random.number(),
    isLiked: faker.random.boolean()
  };
}

function generateFullPostWithComment(commentsCount) {
  post = generatePost();
  return {
    post: post,
    comments: generateArray(generateComment, commentsCount, post.id)
  };
}

const schemas = {
  postPreviews: generatePost,
  post: generateFullPostWithComment
};

const schemaType = process.argv[2];
const dataCount = process.argv[3];
const dataType = process.argv[4]; // object or array

if (schemas[schemaType]) {
  if (dataType === 'object') {
    console.log(JSON.stringify(schemas[schemaType](dataCount), null, 4));
  } else if (dataType === 'array') {
    console.log(JSON.stringify(generateArray(schemas[schemaType], dataCount), null, 4));
  } else {
    console.error('Invalid data type. Should be `object` or `array`');
  }
} else {
  console.error('Invalid schema!');
}
