import { Form, Label, Input, TextArea, Button } from '../../styles/ServiceForm.styles';
import SafeImage from '../common/SafeImage';

type Props = {
  slug: string;
  titulo: string;
  descricao: string;
  imagem: string;
  editId: number | null;
  setSlug: (v: string) => void;
  setTitulo: (v: string) => void;
  setDescricao: (v: string) => void;
  setImagem: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function ServiceForm({
  slug,
  titulo,
  descricao,
  imagem,
  editId,
  setSlug,
  setTitulo,
  setDescricao,
  setImagem,
  onSubmit,
}: Props) {
  return (
    <Form onSubmit={onSubmit}>
      <Label>Slug</Label>
      <Input
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        disabled={!!editId}
      />

      <Label>Título</Label>
      <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} />

      <Label>Descrição</Label>
      <TextArea value={descricao} onChange={(e) => setDescricao(e.target.value)} />

      <Label>Imagem (URL)</Label>
      <Input
        type="text"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
        placeholder="Cole a URL da imagem"
      />

      {/* Preview da imagem */}
      {imagem && !editId &&(
        <div style={{ marginTop: '1rem' }}>
          <SafeImage src={imagem} alt={titulo || 'Serviço'} />
        </div>
      )}

      <Button type="submit">{editId ? 'Salvar Alterações' : 'Adicionar Serviço'}</Button>
    </Form>
  );
}
