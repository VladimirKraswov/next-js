import { useState } from 'react';

export default function ClientFunctionComponent() {
  const [message, setMessage] = useState<string>('Нажмите кнопку для выполнения клиентской функции');

  const handleClick = () => {
    setMessage('Эта функция была выполнена на клиенте!');
  };

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleClick}>Выполнить функцию на клиенте</button>
    </div>
  );
}
