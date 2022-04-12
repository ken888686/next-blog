import { useRouter } from 'next/router';

export default function Date() {
  const router = useRouter();
  const data = router.query;
  return <p>{data.date}</p>;
}
