// src/views/AboutView.jsx
import React from 'react';
import { Container, Row, Col, Image, Card, ProgressBar } from 'react-bootstrap';
import OptimizedImage from '../components/OptimizedImage';

export default function AboutView() { 
  const skills = [
    { name: 'React', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/Bootstrap', level: 88 },
    { name: 'Git', level: 75 },
    { name: 'Bases de Datos', level: 70 }
  ];

  return (
    <div className="main-container">
      <Container fluid className="section-padding fade-in">
        
        {/* Sección principal */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} lg={10} xl={8}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="padding-responsive">
                <Row className="align-items-center">
                  
                  {/* Columna de la imagen */}
                  <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                    <div className="image-container about-image-container">
                      <OptimizedImage
                        src="/images/Gemini_Generated_Image_ke5xlyke5xlyke5x.png" 
                        alt="Nicolás Pérez - Desarrollador Full Stack"
                        className="shadow profile-image"
                        style={{
                          maxWidth: 'clamp(200px, 30vw, 300px)',
                          border: '3px solid var(--github-accent)',
                          objectFit: 'cover',
                          aspectRatio: '4/5',
                          borderRadius: '12px'
                        }}
                      />
                    </div>
                  </Col>

                  {/* Columna del texto */}
                  <Col xs={12} md={8}>
                    <h2 
                      className="mb-4"
                      style={{ 
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        color: '#28a745'
                      }}
                    >
                      Un Poco Sobre Mí
                    </h2>
                    
                    <p className="lead text-responsive mb-3">
                      Mi nombre es <strong>Nicolás Pérez</strong> y soy un apasionado por la tecnología 
                      y el desarrollo de software. Me especializo en la creación de experiencias web 
                      completas, desde el diseño de la interfaz hasta la lógica del servidor.
                    </p>
                    
                    <p className="text-responsive mb-3">
                      Tengo experiencia trabajando con tecnologías como React, Node.js, y bases de datos 
                      SQL y NoSQL. Me encanta aprender constantemente y enfrentar nuevos desafíos que me 
                      permitan crecer como profesional.
                    </p>
                    
                    <p className="text-responsive">
                      Cuando no estoy programando, <strong>disfruto hacer deporte</strong>, 
                      <strong>disfruto ver series</strong> y <strong>disfruto de aprender</strong>.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sección de habilidades */}
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={8}>
            <Card className="border-0 shadow">
              <Card.Body className="padding-responsive">
                <h3 
                  className="text-center mb-4"
                  style={{ 
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    color: '#495057'
                  }}
                >
                  Mis Habilidades Técnicas
                </h3>
                
                <Row>
                  {skills.map((skill, index) => (
                    <Col xs={12} sm={6} key={index} className="mb-3">
                      <div className="mb-2">
                        <span 
                          className="fw-semibold"
                          style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
                        >
                          {skill.name}
                        </span>
                        <span className="float-end text-muted">{skill.level}%</span>
                      </div>
                      <ProgressBar 
                        now={skill.level} 
                        variant={skill.level >= 80 ? 'success' : skill.level >= 70 ? 'warning' : 'info'}
                        className="mb-2"
                        style={{ height: '8px' }}
                      />
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sección de información adicional */}
        <Row className="justify-content-center mt-4">
          <Col xs={12} lg={10} xl={8}>
            <Row>
              <Col xs={12} sm={6} md={4} className="mb-3">
                <Card className="text-center h-100 border-0 bg-light">
                  <Card.Body>
                    <h5 className="text-primary">1+</h5>
                    <p className="mb-0 small">Años de Experiencia</p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col xs={12} sm={6} md={4} className="mb-3">
                <Card className="text-center h-100 border-0 bg-light">
                  <Card.Body>
                    <h5 className="text-success">10+</h5>
                    <p className="mb-0 small">Proyectos Completados</p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col xs={12} sm={6} md={4} className="mb-3">
                <Card className="text-center h-100 border-0 bg-light">
                  <Card.Body>
                    <h5 className="text-info">5+</h5>
                    <p className="mb-0 small">Tecnologías Dominadas</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    </div>
  ); 
}