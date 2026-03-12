import { NextApiRequest, NextApiResponse } from 'next';
import { getServicos, addServico } from '../../../lib/servicosCache';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Lista todos os serviços do cache (LocalStorage)
    return res.status(200).json(getServicos());
  }

  if (req.method === 'POST') {
    // Cria novo serviço e salva no LocalStorage
    const novo = addServico(req.body);
    return res.status(201).json(novo);
  }

  return res.status(405).json({ message: 'Método não permitido' });
}
