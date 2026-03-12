import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ServiceForm from '../../../components/Home/ServiceForm';
import SafeImage from '../../../components/common/SafeImage';

export default function EditarServico() {
  const router = useRouter();
  const { slug } = router.query;

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  // Carregar dados do LocalStorage
  useEffect(() => {
    if (slug) {
      const saved = localStorage.getItem('servicos');
      if (saved) {
        const lista = JSON.parse(saved);
        const servico = lista.find((s: any) => s.slug === slug);
        if (servico) {
          setTitulo(servico.titulo);
          setDescricao(servico.descricao);
          setImagem(servico.imagem);
          setEditId(servico.id);
        }
      }
    }
  }, [slug]);

  // Atualizar serviço
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const saved = localStorage.getItem('servicos');
    if (saved) {
      const lista = JSON.parse(saved);
      const updated = lista.map((s: any) =>
        s.slug === slug ? { ...s, titulo, descricao, imagem } : s
      );
      localStorage.setItem('servicos', JSON.stringify(updated));
    }
    router.push('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
        {/* Botão para voltar */}
      <div style={{ marginTop: '2rem' }}>
        <Link href="/">
          <button style={{ padding: '0.8rem 1.2rem', borderRadius: '6px', background: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Voltar para Home
          </button>
        </Link>
      </div>
      <h1>Editar Serviço</h1>
      <ServiceForm
        slug={slug as string}
        titulo={titulo}
        descricao={descricao}
        imagem={imagem}
        editId={editId}
        setSlug={() => {}} // slug não deve ser alterado na edição
        setTitulo={setTitulo}
        setDescricao={setDescricao}
        setImagem={setImagem}
        onSubmit={handleSubmit}
      />

      {imagem && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Pré-visualização:</h3>
          <SafeImage src={imagem} alt={titulo} />
        </div>
      )}
    </div>
  );
}
