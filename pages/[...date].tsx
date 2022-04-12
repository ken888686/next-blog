import { useRouter } from 'next/router';

const Date = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);
};

export default Date;
