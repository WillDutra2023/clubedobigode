import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from '../../../../src/components/Perfil/UserProfile';

// Mock do localStorage
beforeEach(() => {
  const store: Record<string, string> = {};
  jest.spyOn(Storage.prototype, 'setItem').mockImplementation((key, value) => {
    store[key] = value.toString();
  });
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => store[key] || null);
});

describe('UserProfile component', () => {
  it('carrega dados do localStorage', () => {
    localStorage.setItem('userProfile', JSON.stringify({
      nome: 'William',
      email: 'william@example.com',
      telefone: '123456789'
    }));

    render(<UserProfile />);

    expect(screen.getByDisplayValue('William')).toBeInTheDocument();
    expect(screen.getByDisplayValue('william@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('123456789')).toBeInTheDocument();
  });

  it('salva dados no localStorage ao clicar em salvar', () => {
    render(<UserProfile />);

    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Novo Nome' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'novo@email.com' } });
    fireEvent.change(screen.getByLabelText(/Telefone/i), { target: { value: '987654321' } });

    fireEvent.click(screen.getByText(/Salvar/i));

    const saved = JSON.parse(localStorage.getItem('userProfile') || '{}');
    expect(saved).toEqual({
      nome: 'Novo Nome',
      email: 'novo@email.com',
      telefone: '987654321'
    });
  });
});
