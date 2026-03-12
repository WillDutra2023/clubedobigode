import Link from 'next/link';
import {
  Container,
  Image,
  Title,
  Description,
  BackLink,
} from '../../styles/ServiceDetail.styles';
import { Servico } from '../../types/Servico';

type Props = {
  servico: Servico;
};

export default function ServiceDetail({ servico }: Props) {
  if (!servico) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Image src={servico.imagem} alt={servico.titulo} />
      <Title>{servico.titulo}</Title>
      <Description>{servico.descricao}</Description>
      <Link href="/">
        <BackLink>Voltar para Home</BackLink>
      </Link>
    </Container>
  );
}
