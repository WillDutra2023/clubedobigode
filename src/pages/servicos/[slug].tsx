import { GetStaticPaths, GetStaticProps } from 'next';
import ServiceDetail from '../../components/Servicos/ServiceDetail';
import { Servico } from '../../types/Servico';

const servicos: Servico[] = [
  { id: 1, slug: 'corte-de-cabelo', titulo: 'Corte de Cabelo', descricao: 'Corte clássico e moderno.', imagem: '/images/corte.jpg' },
  { id: 2, slug: 'barba', titulo: 'Barba', descricao: 'Aparar e modelar a barba.', imagem: '/images/barba.jpg' },
  { id: 3, slug: 'sobrancelha', titulo: 'Sobrancelha', descricao: 'Design masculino de sobrancelha.', imagem: '/images/sobrancelha.jpg' },
  { id: 4, slug: 'pigmentacao', titulo: 'Pigmentação Capilar', descricao: 'Tratamento estético para realçar fios.', imagem: '/images/pigmentacao.jpg' },
  { id: 5, slug: 'hidratacao', titulo: 'Hidratação', descricao: 'Cuidado especial para cabelo e barba.', imagem: '/images/hidratacao.jpg' },
];

export default function ServicoPage({ servico }: { servico: Servico }) {
  return <ServiceDetail servico={servico} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: servicos.map((s) => ({ params: { slug: s.slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const servico = servicos.find((s) => s.slug === params?.slug);
  return {
    props: { servico: servico || null },
    revalidate: 60, // ISR
  };
};
