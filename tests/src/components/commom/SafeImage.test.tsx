import { render, screen } from '@testing-library/react';
import SafeImage from '../../../../src/components/common/SafeImage';

describe('SafeImage component', () => {
  it('renderiza imagem com src válido', () => {
    render(<SafeImage src="/images/test.png" alt="Teste" />);
    const img = screen.getByAltText('Teste');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/images/test.png');
  });

  it('usa fallback quando src está vazio', () => {
    render(<SafeImage src="" alt="Fallback" />);
    const img = screen.getByAltText('Fallback');
    expect(img).toHaveAttribute('src', '/images/broken.png');
  });
});
