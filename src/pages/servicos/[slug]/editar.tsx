import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ServiceForm from '../../../components/Home/ServiceForm';
import { Servico } from '../../../types/Servico';

export default function EditarServicoPage() {
  const router = useRouter();
  const { id } = router.query;
  const [servico, setServico] = useState<Servico | null>(null);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`/api/servicos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setServico(data);
          setTitulo(data.titulo);
          setDescricao(data.descricao);
          setSlug(data.slug);
        });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/servicos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, titulo, descricao }),
    });
    router.push('/'); // volta para a Home após salvar
  };

  if (!servico) return <p>Carregando...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Editar Serviço</h1>
      <ServiceForm
        slug={slug}
        titulo={titulo}
        descricao={descricao}
        editId={Number(id)}
        setSlug={setSlug}
        setTitulo={setTitulo}
        setDescricao={setDescricao}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
