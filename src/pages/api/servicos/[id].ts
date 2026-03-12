import { NextApiRequest, NextApiResponse } from 'next';
import { getServicoById, updateServico, deleteServico } from '../../../lib/servicosCache';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const servicoId = Number(id);
  const servico = getServicoById(servicoId);

  if (!servico) {
    return res.status(404).json({ message: 'Serviço não encontrado' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(servico);
  }

  if (req.method === 'PUT') {
    const atualizado = updateServico(servicoId, req.body);
    return res.status(200).json(atualizado);
  }

  if (req.method === 'DELETE') {
    deleteServico(servicoId);
    return res.status(200).json({ message: 'Serviço removido com sucesso' });
  }

  return res.status(405).json({ message: 'Método não permitido' });
}
