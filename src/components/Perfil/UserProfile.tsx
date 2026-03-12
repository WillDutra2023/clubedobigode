import { useState, useEffect } from 'react';
import { saveUserProfile, getUserProfile } from '../../lib/storage';
import { useRouter } from 'next/router';
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
} from '../../styles/UserProfile.styles';
import { formatPhone } from '../../utils/handlePhoneChange';

type UserProfile = {
  nome: string;
  email: string;
  telefone: string;
};

export default function UserProfile() {
  const [profile, setProfile] = useState<UserProfile>({
    nome: '',
    email: '',
    telefone: '',
  });

  const router = useRouter();

  useEffect(() => {
    const stored = getUserProfile();
    if (stored) setProfile(stored);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, telefone: formatPhone(e.target.value) });
  };

  const handleSave = () => {
    if (!profile.nome || !profile.email || !profile.telefone) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    saveUserProfile(profile);
    alert('Perfil atualizado com sucesso!');
    router.push('/'); // volta para Home
  };

  const handleBack = () => {
    router.push('/'); // botão voltar
  };

  return (
    <Container>
      <Title>Perfil do Usuário</Title>
      <FormGroup>
        <Label>Nome</Label>
        <Input name="nome" value={profile.nome} onChange={handlePhoneChange} />

        <Label>Email</Label>
        <Input
          name="email"
          value={profile.email}
          onChange={handlePhoneChange}
        />

        <Label>Telefone</Label>
        <Input
          name="telefone"
          value={profile.telefone}
          onChange={handlePhoneChange}
        />

        <Button onClick={handleSave}>Salvar</Button>
        <Button onClick={handleBack} style={{ backgroundColor: '#888' }}>
          Voltar para Home
        </Button>
      </FormGroup>
    </Container>
  );
}
