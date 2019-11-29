// Ref: https://www.howtographql.com/graphql-js/0-introduction/
const { GraphQLServer } = require('graphql-yoga');

// Dummy data
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}];

let idCount = links.length;

// Resolvers
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
	feed: () => links,
  },

  Mutation: {
    // 2
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },

    updateLink: (parent, args) => {
      const {id, description} = args;
      for (let i = 0; i < links.length; i++) {
        if (links[i].id === `link-${id}`) {
          // update
          links[i].description = description;
          return links[i];
        }
      }
      return null;
    },

    deleteLink: (parent, args) => {
      const {id} = args;
      for (let i = 0; i < links.length; i++) {
        if (links[i].id === `link-${id}`) {
          // delete
          return links.splice(i, 1)[0];
        }
      }
      return null;
    },
  },
}

// Create GraphQLServer
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))

/* Tests
# get/inspect
query {
  feed {
    id,
    url,
    description
  }
}

# post/add
mutation {
  post(
    url: "https://www.howtographql.com/graphql-js/1-getting-started/"
    description: "graphql tutorial"
  ) {
    id,
    description,
    url,
  }
}

# update
mutation {
  updateLink(
    id: 0,
    description: "how to start with graphql",
  ) {
    id,
    description,
    url,
  }
}

# delete
mutation {
  deleteLink(
    id: 0,
  ) {
    id,
    description,
    url,
  }
}
*/
