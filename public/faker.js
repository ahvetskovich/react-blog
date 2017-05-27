const faker = require('faker');

function generateArray(genFunc, count) {
  const arrayData = [];
  for (let i = 0; i < count; i++) {
    arrayData.push(genFunc());
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

function generateComment() {
  return {
    id: faker.random.number(),
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

const schemas = {
  post: generatePost,
  comment: generateComment,
};

const schemaType = process.argv[2];
const dataCount = process.argv[3];

if (schemas[schemaType]) {
  console.log(JSON.stringify(generateArray(schemas[schemaType], dataCount), null, 4));
} else {
  console.error('Invalid scheme!');
}
