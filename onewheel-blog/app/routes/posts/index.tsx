import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const posts = [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "my-second-post",
      title: "My Second Post",
    },
  ];
  const postsString = JSON.stringify({ posts });
  return new Response(postsString, {
    headers: {
      "content-type": "apllication/json",
    },
  });
};
export default function pstsRoute() {
  const { posts } = useLoaderData();
  console.log({ posts });
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.slug}>
              <Link to={post.slug} className="text-blue-600 underline">
                {post.title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
