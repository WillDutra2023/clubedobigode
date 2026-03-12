import Link from 'next/link';
import { Card } from '../../styles/ServiceCard.styles';
import { Servico } from '../../types/Servico';
import SafeImage from '../common/SafeImage';

type Props = {
  servico: Servico;
  onDelete: (id: number) => void;
};

export default function ServiceCard({ servico, onDelete }: Props) {
  return (
    <Card>
      <Link href={`/servicos/${servico.slug}`}>
        <div>
          <SafeImage src={servico?.imagem} alt={servico?.titulo || 'Serviço'} />
          <h2>{servico.titulo}</h2>
          <p>{servico.descricao}</p>
        </div>
      </Link>
      <div className="actions">
        <Link href={`/servicos/${servico.slug}/editar`}>
          <button className="edit">Editar</button>
        </Link>
        <button className="delete" onClick={() => onDelete(servico.id)}>
          Excluir
        </button>
      </div>
    </Card>
  );
}
