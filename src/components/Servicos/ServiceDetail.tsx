import Link from 'next/link';
import { Container, Title, Description, BackLink } from '../../styles/ServiceDetail.styles';
import { Servico } from '../../types/Servico';
import SafeImage from '../common/SafeImage';

type Props = {
  servico: Servico;
};

export default function ServiceDetail({ servico }: Props) {
  return (
    <Container>
      <SafeImage src={servico?.imagem} alt={servico?.titulo || 'Serviço'} />
      <Title>{servico.titulo}</Title>
      <Description>{servico.descricao}</Description>
      <Link href="/">
        <BackLink>Voltar para Home</BackLink>
      </Link>
    </Container>
  );
}
