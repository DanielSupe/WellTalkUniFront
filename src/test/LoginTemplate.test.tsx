import LoginTemplate from '@/modules/Login/template';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Asegúrate de importar correctamente tu componente

describe('LoginTemplate', () => {
  beforeEach(() => {
    render(<LoginTemplate />);
  });

  it('renders without crashing', () => {
    // Verifica que el componente se renderice correctamente sin errores
    // Puedes usar screen.getByText(), screen.getByRole(), etc., para verificar elementos
    expect(screen.getByText('Iniciar sesión')).toBeInTheDocument();
    expect(screen.getByText('No tienes cuenta?')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Ingresar/i })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /Recordarme/i })).toBeInTheDocument();
  });

  it('updates form state when input values change', async () => {
    // Verifica que los valores del formulario se actualicen correctamente cuando se cambian los valores de entrada
    const emailInput = screen.getByRole('textbox', { name: /Email/i });
    const passwordInput = screen.getByLabelText(/Contraseña/i);

    // Simula la entrada de texto en los campos de entrada
    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password123');

    // Verifica que los valores del formulario se actualicen correctamente
    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  it('handles form submission correctly', async () => {
    // Verifica que el formulario se envíe correctamente cuando se ingresan valores válidos
    const emailInput = screen.getByRole('textbox', { name: /Email/i });
    const passwordInput = screen.getByLabelText(/Contraseña/i);
    const submitButton = screen.getByRole('button', { name: /Ingresar/i });

    // Simula la entrada de texto en los campos de entrada
    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password123');

    // Simula el envío del formulario
    fireEvent.click(submitButton);

    // Espera a que se complete la acción asíncrona (puedes ajustar el tiempo de espera según sea necesario)
    await waitFor(() => {
      // Verifica que la redirección ocurra correctamente después de iniciar sesión exitosamente
      expect(window.location.pathname).toBe('/Main');
    });
  });

  it('updates "Remember me" checkbox state correctly', async () => {
    // Verifica que el estado del checkbox "Recordarme" se actualice correctamente al hacer clic
    const rememberCheckbox = screen.getByRole('checkbox', { name: /Recordarme/i });

    // Verifica que el checkbox esté desmarcado inicialmente
    expect(rememberCheckbox).not.toBeChecked();

    // Simula hacer clic en el checkbox
    userEvent.click(rememberCheckbox);

    // Verifica que el checkbox esté marcado después de hacer clic
    expect(rememberCheckbox).toBeChecked();

    // Simula hacer clic nuevamente para desmarcar el checkbox
    userEvent.click(rememberCheckbox);

    // Verifica que el checkbox esté desmarcado nuevamente
    expect(rememberCheckbox).not.toBeChecked();
  });
});
