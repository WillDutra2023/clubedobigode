import Link from 'next/link';
import { Card } from '../../styles/ServiceCard.styles';
import { Servico } from '../../types/Servico';

type Props = {
  servico: Servico;
  onDelete: (id: number) => void;
};

export default function ServiceCard({ servico, onDelete }: Props) {
  return (
    <Card>
      <Link href={`/servicos/${servico.slug}`}>
        <img src={servico.imagem} alt={servico.titulo} />
        <h2>{servico.titulo}</h2>
        <p>{servico.descricao}</p>
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
