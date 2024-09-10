import { useEffect, useState } from 'react';

export default function ClientSideComponent() {
  const [data, setData] = useState<string>('Loading...');

  useEffect(() => {
    setTimeout(() => {
      setData('Этот компонент был отрисован на клиенте (CSR)');
    }, 1000);
  }, []);

  return <div>{data}</div>;
}
