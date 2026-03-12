import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ServiceDetail from '../../components/Servicos/ServiceDetail';
import { Servico } from '../../types/Servico';

export default function ServicoPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [servico, setServico] = useState<Servico | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const saved = localStorage.getItem('servicos');
      if (saved) {
        const lista = JSON.parse(saved);
        const encontrado = lista.find((s: Servico) => s.slug === slug);
        if (encontrado) {
          setServico(encontrado);
        }
      }
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return <p>Carregando serviço...</p>;
  }

  if (!servico) {
    return <p>Serviço não encontrado.</p>;
  }

  return <ServiceDetail servico={servico} />;
}
