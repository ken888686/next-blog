import Link from 'next/link';

export default function Index() {
  const posts = [
    { id: 1 }, { id: 2 }, { id: 3 },
  ];

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={{
            pathname: `/post/${post.id}`,
          }}
          >
            <p>
              Post Id:
              {post.id}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
