import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Здесь выполняется серверная функция
  res.status(200).json({ message: 'Эта функция была выполнена на сервере!' });
}
