// src/views/HomeView.jsx
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import OptimizedImage from '../components/OptimizedImage';

export default function HomeView() { 
  const { isDark } = useTheme();
  
  return (
    <div 
      className="main-container"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%)'
          : 'linear-gradient(135deg, #f6f8fa 0%, #ffffff 50%, #f1f3f4 100%)'
      }}
    >
      <Container fluid className="section-padding fade-in">
        <Row className="justify-content-center align-items-center min-vh-100">
          
          {/* Columna para el texto */}
          <Col 
            xs={12} 
            md={8} 
            lg={7} 
            xl={6}
            className="text-center text-md-start mb-4 mb-md-0 order-2 order-md-1"
          >
            <h1 
              className="display-4 fw-bold mb-3"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.2'
              }}
            >
              Hola, soy{' '}
              <span className="text-primary">Nicolás Pérez</span>
            </h1>
            
            <p className="lead mb-3 text-responsive">
              Soy un desarrollador Full-Stack apasionado por crear aplicaciones web modernas y funcionales.
            </p>
            
            <p className="mb-4 text-responsive">
              Bienvenido a mi portafolio personal. Aquí encontrarás información sobre mis habilidades, 
              los proyectos en los que he trabajado y cómo puedes contactarme.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <Button 
                as={Link} 
                to="/projects" 
                variant="primary" 
                size="lg"
                className="px-4 py-2"
              >
                Ver mis Proyectos
              </Button>
              
              <Button 
                as={Link} 
                to="/contact" 
                variant="outline-primary" 
                size="lg"
                className="px-4 py-2"
              >
                Contáctame
              </Button>
            </div>
          </Col>

          {/* Columna para la imagen */}
          <Col 
            xs={12} 
            md={4} 
            lg={5} 
            xl={6}
            className="text-center mb-4 mb-md-0 order-1 order-md-2"
          >
            <div className="image-container">
              <OptimizedImage
                src="/images/Gemini_Generated_Image_ke5xlyke5xlyke5x.png" 
                alt="Nicolás Pérez - Desarrollador Full Stack"
                className="profile-image shadow rounded-circle"
                style={{
                  maxWidth: 'clamp(200px, 40vw, 400px)',
                  border: '4px solid var(--github-accent)',
                  objectFit: 'cover',
                  aspectRatio: '1/1'
                }}
              />
            </div>
          </Col>

        </Row>
        
        {/* Sección adicional de skills o highlights */}
        <Row className="mt-5 pt-5">
          <Col xs={12}>
            <div className="text-center">
              <h2 className="h4 mb-4 text-muted">Tecnologías que manejo</h2>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {['React', 'Node.js', 'JavaScript', 'CSS', 'Bootstrap', 'Git'].map((tech, index) => (
                  <span 
                    key={index}
                    className="badge bg-light text-dark px-3 py-2 fs-6 border"
                    style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  ); 
}