import Link from 'next/link';
import Image from 'next/image';
import { IconWrapper, Label } from '../../styles/ProfileIcon.Styles';

export default function ProfileIcon() {
  return (
    <Link href="/perfil">
      <IconWrapper>
        <Image src="/images/profile.jpg" alt="Perfil" width={40} height={40} />
        <Label>Perfil</Label>
      </IconWrapper>
    </Link>
  );
}
