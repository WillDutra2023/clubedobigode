import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ServiceCard from '../components/Home/ServiceCard';
import ServiceForm from '../components/Home/ServiceForm';
import { Servico } from '../types/Servico';

const Container = styled.div`
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export default function Home() {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [slug, setSlug] = useState('');

  // Carregar serviços do LocalStorage ou API
  useEffect(() => {
    const data = localStorage.getItem('servicos');
    if (data) {
      setServicos(JSON.parse(data));
    } else {
      fetch('/api/servicos')
        .then((res) => res.json())
        .then((data) => {
          setServicos(data);
          localStorage.setItem('servicos', JSON.stringify(data));
        });
    }
  }, []);

  // Persistir no LocalStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('servicos', JSON.stringify(servicos));
  }, [servicos]);

  // Criar novo serviço
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const novoServico = { slug, titulo, descricao, imagem: '/images/default.jpg' };

    const res = await fetch('/api/servicos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoServico),
    });
    const data = await res.json();
    setServicos([...servicos, data]);

    setTitulo('');
    setDescricao('');
    setSlug('');
  };

  // Excluir serviço
  const handleDelete = async (id: number) => {
    await fetch(`/api/servicos/${id}`, { method: 'DELETE' });
    setServicos(servicos.filter((s) => s.id !== id));
  };

  return (
    <Container>
      <h1>Clube do Bigode ✂️🧔</h1>
      <p>Confira nossos serviços exclusivos para você!</p>

      {/* Formulário apenas para criar novos serviços */}
      <ServiceForm
        slug={slug}
        titulo={titulo}
        descricao={descricao}
        editId={null} // não há edição na Home
        setSlug={setSlug}
        setTitulo={setTitulo}
        setDescricao={setDescricao}
        onSubmit={handleSubmit}
      />

      {/* Listagem de serviços */}
      <Grid>
        {servicos.map((servico) => (
          <ServiceCard
            key={servico.id}
            servico={servico}
            onDelete={handleDelete}
          />
        ))}
      </Grid>
    </Container>
  );
}
