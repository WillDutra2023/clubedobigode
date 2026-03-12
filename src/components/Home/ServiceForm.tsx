import { Form, Label, Input, TextArea, Button } from '../../styles/ServiceForm.styles';

type Props = {
  slug: string;
  titulo: string;
  descricao: string;
  editId: number | null;
  setSlug: (v: string) => void;
  setTitulo: (v: string) => void;
  setDescricao: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function ServiceForm({ slug, titulo, descricao, editId, setSlug, setTitulo, setDescricao, onSubmit }: Props) {
  return (
    <Form onSubmit={onSubmit}>
      <Label>Slug</Label>
      <Input value={slug} onChange={(e) => setSlug(e.target.value)} />

      <Label>Título</Label>
      <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} />

      <Label>Descrição</Label>
      <TextArea value={descricao} onChange={(e) => setDescricao(e.target.value)} />

      <Button type="submit">{editId ? 'Salvar Alterações' : 'Adicionar Serviço'}</Button>
    </Form>
  );
}
