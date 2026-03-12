import { useState, useEffect } from 'react';
import ServiceForm from '../components/Home/ServiceForm';
import ServiceCard from '../components/Home/ServiceCard';
import ProfileIcon from '../components/Home/ProfileIcon';
import { Container, Grid } from '../styles/Home.styles';
import { Servico } from '../types/Servico';

export default function Home() {
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [slug, setSlug] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('servicos');
    if (saved) {
      setServicos(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!slug || !titulo || !descricao || !imagem) {
      alert('Slug, Título, descrição e imagem são obrigatórios!');
      return;
    }

    const novoServico = { id: Date.now(), slug, titulo, descricao, imagem };

    const updated = [...servicos, novoServico];
    setServicos(updated);
    localStorage.setItem('servicos', JSON.stringify(updated));

    setSlug('');
    setTitulo('');
    setDescricao('');
    setImagem('');
  };

  const handleDelete = (id: number) => {
    const updated = servicos.filter((s) => s.id !== id);
    setServicos(updated);
    localStorage.setItem('servicos', JSON.stringify(updated));
  };

  return (
    <Container>
      <ProfileIcon />
      <h1>Serviços</h1>

      <ServiceForm
        slug={slug}
        titulo={titulo}
        descricao={descricao}
        imagem={imagem}
        editId={null}
        setSlug={setSlug}
        setTitulo={setTitulo}
        setDescricao={setDescricao}
        setImagem={setImagem}
        onSubmit={handleSubmit}
      />

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
