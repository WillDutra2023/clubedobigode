import { NextApiRequest, NextApiResponse } from 'next';

let servicos: any[] = []; // memória local (pode ser substituído por DB)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(servicos);
  }

  if (req.method === 'POST') {
    const { slug, titulo, descricao, imagem } = req.body;

    const novoServico = {
      id: servicos.length + 1,
      slug,
      titulo,
      descricao,
      imagem: imagem || '/images/default.jpg',
    };

    servicos.push(novoServico);
    return res.status(201).json(novoServico);
  }

  return res.status(405).json({ message: 'Método não permitido' });
}
