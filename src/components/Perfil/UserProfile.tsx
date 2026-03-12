import { Container, Avatar, Name, Bio, Button } from '../../styles/UserProfile.styles';

type Props = {
  nome: string;
  bio: string;
  avatar: string;
};

export default function UserProfile({ nome, bio, avatar }: Props) {
  return (
    <Container>
      <Avatar src={avatar} alt={nome} />
      <Name>{nome}</Name>
      <Bio>{bio}</Bio>
      <Button>Editar Perfil</Button>
    </Container>
  );
}
