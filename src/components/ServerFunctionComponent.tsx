import { useState } from 'react';

export default function ServerFunctionComponent() {
  const [message, setMessage] = useState<string>('Нажмите кнопку для выполнения серверной функции');

  const handleClick = async () => {
    const res = await fetch('/api/server-function');
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleClick}>Выполнить функцию на сервере</button>
    </div>
  );
}
