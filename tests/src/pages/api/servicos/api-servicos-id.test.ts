import handler from '../../../../../src/pages/api/servicos/[id]';
import { NextApiRequest, NextApiResponse } from 'next';
import * as servicosCache from '../../../../../src/lib/servicosCache';

// Mock das funções do servicosCache
jest.mock('../../../../../src/lib/servicosCache');

function mockRes() {
  const res: Partial<NextApiResponse> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.end = jest.fn().mockReturnValue(res);
  return res as NextApiResponse;
}

describe('API /servicos/[id]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('retorna serviço existente com GET', () => {
    (servicosCache.getServicoById as jest.Mock).mockReturnValue({
      id: 1,
      titulo: 'Corte de Barba',
      descricao: 'Serviço de barba',
    });

    const req = { method: 'GET', query: { id: '1' } } as unknown as NextApiRequest;
    const res = mockRes();

    handler(req, res);

    expect(servicosCache.getServicoById).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ id: 1, titulo: 'Corte de Barba' })
    );
  });

  it('retorna 404 para serviço inexistente', () => {
    (servicosCache.getServicoById as jest.Mock).mockReturnValue(null);

    const req = { method: 'GET', query: { id: '999' } } as unknown as NextApiRequest;
    const res = mockRes();

    handler(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Serviço não encontrado' });
  });

  it('atualiza serviço com PUT', () => {
    (servicosCache.getServicoById as jest.Mock).mockReturnValue({ id: 1 });
    (servicosCache.updateServico as jest.Mock).mockReturnValue({
      id: 1,
      titulo: 'Novo Título',
      descricao: 'Nova descrição',
    });

    const req = {
      method: 'PUT',
      query: { id: '1' },
      body: { titulo: 'Novo Título', descricao: 'Nova descrição' },
    } as unknown as NextApiRequest;
    const res = mockRes();

    handler(req, res);

    expect(servicosCache.updateServico).toHaveBeenCalledWith(1, req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ titulo: 'Novo Título', descricao: 'Nova descrição' })
    );
  });

  it('deleta serviço com DELETE', () => {
    (servicosCache.getServicoById as jest.Mock).mockReturnValue({ id: 2 });

    const req = { method: 'DELETE', query: { id: '2' } } as unknown as NextApiRequest;
    const res = mockRes();

    handler(req, res);

    expect(servicosCache.deleteServico).toHaveBeenCalledWith(2);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Serviço removido com sucesso' });
  });

  it('retorna 405 para método não permitido', () => {
    (servicosCache.getServicoById as jest.Mock).mockReturnValue({ id: 1 });

    const req = { method: 'POST', query: { id: '1' } } as unknown as NextApiRequest;
    const res = mockRes();

    handler(req, res);

    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.json).toHaveBeenCalledWith({ message: 'Método não permitido' });
  });
});
