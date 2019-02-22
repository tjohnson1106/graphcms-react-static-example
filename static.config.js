import { request } from "graphql-request";

const GRAPHCMS_ENDPOINT =
  "https://api-useast.graphcms.com/v1/cjsf4xs870ocd01ck5mdd3s5a/master";

const query = `
  {
    posts {
      id
      title
      image {
        handle
      }
      content
      tags
      author {
        id
        name
      }
    }
    
    authors {
      id
      name
      avatar {
        handle
      }
      bibliography
    }
  }
  `;

export default {
  getSiteData: () => ({
    title: "React Static"
  }),
  getRoutes: async () => {
    await request();
    return [
      {
        path: "/blog",
        getData: () => ({
          posts
        }),
        children: posts.map((post) => ({
          path: `/post/${post.id}`,
          component: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      }
    ];
  }
};
