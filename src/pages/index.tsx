import ClientSideComponent from '../components/ClientSideComponent';
import ServerSideComponent from '../components/ServerSideComponent';
import ClientFunctionComponent from '../components/ClientFunctionComponent';
import ServerFunctionComponent from '../components/ServerFunctionComponent';

interface HomeProps {
  serverData: string;
}

export default function Home({ serverData }: HomeProps) {
  return (
    <div>
      <h1>Демонстрация Next.js на TypeScript</h1>

      <h2>Компонент, отрисованный на клиенте:</h2>
      <ClientSideComponent />

      <h2>Компонент, отрисованный на сервере:</h2>
      <ServerSideComponent serverData={serverData} />

      <h2>Выполнение функции на клиенте:</h2>
      <ClientFunctionComponent />

      <h2>Выполнение функции на сервере:</h2>
      <ServerFunctionComponent />
    </div>
  );
}

// Код выполняется только на сервере (SSR)
export async function getServerSideProps() {
  const serverData = 'Этот компонент был отрисован на сервере (SSR)';
  
  return {
    props: {
      serverData,
    },
  };
}
