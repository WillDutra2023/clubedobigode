export type Servico = {
  id: number;
  slug: string;
  titulo: string;
  descricao: string;
  imagem: string;
};

// Função auxiliar para carregar do LocalStorage
function loadFromLocalStorage(): Servico[] {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('servicos');
    if (data) return JSON.parse(data);
  }
  return [
    { id: 1, slug: 'corte-de-cabelo', titulo: 'Corte de Cabelo', descricao: 'Corte clássico e moderno.', imagem: '/images/corte.jpg' },
    { id: 2, slug: 'barba', titulo: 'Barba', descricao: 'Aparar e modelar a barba.', imagem: '/images/barba.jpg' },
    { id: 3, slug: 'sobrancelha', titulo: 'Sobrancelha', descricao: 'Design masculino de sobrancelha.', imagem: '/images/sobrancelha.jpg' },
  ];
}

// Cache inicial
let servicos: Servico[] = loadFromLocalStorage();

// Função auxiliar para salvar no LocalStorage
function saveToLocalStorage() {
  if (typeof window !== 'undefined') {
    localStorage.setItem('servicos', JSON.stringify(servicos));
  }
}

// CRUD
export function getServicos() {
  return servicos;
}

export function getServicoById(id: number) {
  return servicos.find((s) => s.id === id);
}

export function addServico(servico: Omit<Servico, 'id'>) {
  const novo = { id: Date.now(), ...servico };
  servicos.push(novo);
  saveToLocalStorage();
  return novo;
}

export function updateServico(id: number, dados: Partial<Servico>) {
  const index = servicos.findIndex((s) => s.id === id);
  if (index === -1) return null;
  servicos[index] = { ...servicos[index], ...dados };
  saveToLocalStorage();
  return servicos[index];
}

export function deleteServico(id: number) {
  servicos = servicos.filter((s) => s.id !== id);
  saveToLocalStorage();
  return true;
}
