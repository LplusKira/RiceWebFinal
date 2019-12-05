# Disclaimer
This is a demo repo implementing part of the tutorial at [graphql tutorial](https://www.howtographql.com/graphql-js/0-introduction/).

# How to install
```
  npm i
```

# How to run
``` 
  npm run start
```
[Demo Link](https://youtu.be/Jf2Nvkp8gaM)

# How to query with graphql playground
```
# Navigate to localhost:4000
# Put your query on the left panel and press the play-like button to see its result

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
```
