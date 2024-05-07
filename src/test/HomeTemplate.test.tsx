import React from 'react';
import { render } from '@testing-library/react';
import HomeTemplate from '@/modules/home/template';


import { CandadoSVG, ComunidadSVG, ManoSVG, PhoneSVG } from '../../public/svgs/svgs';
import BannerHome from '@/modules/home/components/Banner';
import Hero from '@/modules/home/components/Hero';

describe('HomeTemplate', () => {
  it('renders without crashing', () => {
    render(<HomeTemplate />);
  });

  it('renders the Hero component with correct props', () => {
    const { getByText } = render(<HomeTemplate />);
    expect(getByText('WellTalkUni')).toBeInTheDocument();
    expect(getByText('Donde tu bienestar importa')).toBeInTheDocument();
  });

  it('renders the BannerHome component with correct items', () => {
    const { getByText } = render(<HomeTemplate />);
    expect(getByText('Confidencialidad')).toBeInTheDocument();
    expect(getByText('Apoyo Profesional')).toBeInTheDocument();
    expect(getByText('Accesibilidad')).toBeInTheDocument();
    expect(getByText('Comunidad')).toBeInTheDocument();
  });

  it('renders the Hero component without causing errors', () => {
    // Prueba que el componente Hero se renderice sin causar errores
    render(<Hero imagenUrl="/Images/Home/Imagen_3.jpg" title="WellTalkUni" subtitulo='Donde tu bienestar importa' />);
  });

  it('renders the BannerHome component without causing errors', () => {
    // Prueba que el componente BannerHome se renderice sin causar errores
    const items = [{title: "Confidencialidad", icon: CandadoSVG() },{title: "Apoyo Profesional", icon: ManoSVG() },{title: "Accesibilidad", icon: PhoneSVG() },{title: "Comunidad", icon: ComunidadSVG()}];
    render(<BannerHome items={items} />);
  });

  it('renders with empty items array without causing errors', () => {
    // Prueba que el componente HomeTemplate se renderice sin causar errores con un array de items vacío
    const items = [];
    render(<HomeTemplate />);
  });

  // Agrega más pruebas según sea necesario para cubrir otros aspectos de tu componente
});
