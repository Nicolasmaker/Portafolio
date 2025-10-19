// src/views/ProjectsView.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectCard from '@molecules/ProjectCard';

// Datos de mis proyectos
const projectsData = [
  {
    title: "Dulce Arte - Tienda Online de Pastelería",
    description: "E-commerce especializado en productos de repostería artesanal con catálogo de pasteles personalizados, sistema de pedidos, carrito de compras y procesamiento de pagos en línea.",
    imgUrl: "/images/Gemini_Generated_Image_1vblrn1vblrn1vbl.png",
    link: "#",
    technologies: ["React", "Node.js", "MongoDB", "PayPal API"],
    category: "fullstack"
  },
  {
    title: "Tienda Online de Tecnología",
    description: "Plataforma e-commerce para venta de productos tecnológicos con filtros avanzados, comparador de productos, wishlist y sistema de reseñas de usuarios.",
    imgUrl: "/images/Gemini_Generated_Image_ajz56rajz56rajz5.png",
    link: "#",
    technologies: ["React", "Express", "MySQL", "Stripe"],
    category: "fullstack"
  },
  {
    title: "Portafolio Personal",
    description: "Este mismo portafolio web completamente responsivo, diseñado para mostrar mis habilidades, proyectos y experiencia como desarrollador full-stack.",
    imgUrl: "/images/Gemini_Generated_Image_t2lkmnt2lkmnt2lk.png",
    link: "#",
    technologies: ["React", "Bootstrap", "CSS3", "Vite"],
    category: "frontend"
  }
];

const categories = [
  { key: "all", label: "Todos" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Full Stack" }
];

export default function ProjectsView() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="main-container">
      <Container fluid className="section-padding fade-in">
        
        {/* Header */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} lg={10}>
            <div className="text-center">
              <h1 
                className="mb-3"
                style={{ 
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: '#495057'
                }}
              >
                Mis Proyectos
              </h1>
              <p className="lead text-responsive mb-4">
                Una selección de los proyectos en los que he trabajado, 
                desde aplicaciones frontend hasta soluciones full-stack completas.
              </p>
            </div>
          </Col>
        </Row>

        {/* Filtros */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} className="text-center">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map(category => (
                <Button
                  key={category.key}
                  variant={filter === category.key ? "primary" : "outline-primary"}
                  onClick={() => setFilter(category.key)}
                  className="px-3 py-1"
                  style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Grid de proyectos */}
        <Row className="justify-content-center">
          <Col xs={12} lg={11} xl={10}>
            <Row className="g-4">
              {filteredProjects.map((project, index) => (
                <Col 
                  xs={12} 
                  sm={6} 
                  lg={4} 
                  key={index}
                  className="d-flex"
                >
                  <ProjectCard project={project} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Sección CTA */}
        <Row className="justify-content-center mt-5 pt-4">
          <Col xs={12} lg={8} className="text-center">
            <Card className="border-0 bg-light">
              <Card.Body className="padding-responsive">
                <h3 className="mb-3">¿Tienes un proyecto en mente?</h3>
                <p className="text-responsive mb-3">
                  Me encantaría conocer tu idea y ayudarte a hacerla realidad. 
                  ¡Hablemos sobre tu próximo proyecto!
                </p>
                <Button 
                  as={Link}
                  to="/contact"
                  variant="primary" 
                  size="lg"
                  className="px-4 py-2"
                  style={{
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <i className="fas fa-paper-plane me-2"></i>
                  Empecemos a trabajar juntos
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  ); 
}