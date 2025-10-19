// src/components/molecules/ProjectCard.jsx
import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OptimizedImage from '@atoms/OptimizedImage';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const isGemini = project.imgUrl?.includes('Gemini_Generated_Image_');

  return (
    <Card className="card-responsive shadow border-0 w-100">
      <div style={{ height: '200px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
        <OptimizedImage
          src={project.imgUrl}
          alt={project.title}
          className="w-100 h-100"
          style={{
            objectFit: isGemini ? 'contain' : 'cover',
            objectPosition: 'center',
            transition: 'transform 0.3s ease',
            padding: isGemini ? '15px' : '0'
          }}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title
          className="h5 mb-2"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
        >
          {project.title}
        </Card.Title>

        <Card.Text
          className="flex-grow-1 mb-3 text-responsive"
          style={{ color: '#6c757d' }}
        >
          {project.description}
        </Card.Text>

        <div className="mb-3">
          <div className="d-flex flex-wrap gap-1">
            {project.technologies?.map((tech, idx) => (
              <Badge
                key={idx}
                bg="light"
                text="dark"
                className="px-2 py-1"
                style={{
                  fontSize: 'clamp(0.7rem, 1.5vw, 0.75rem)',
                  border: '1px solid #dee2e6',
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-2 mt-auto">
          <Button
            variant="primary"
            href={project.link}
            target="_blank"
            className="flex-grow-1"
            style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}
          >
            Ver Proyecto
          </Button>
          <Button
            variant="outline-secondary"
            href="#"
            target="_blank"
            className="flex-grow-1"
            style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}
          >
            Código
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
