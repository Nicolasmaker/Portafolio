// src/views/ContactView.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

export default function ContactView() {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para simular el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setShowAlert(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Ocultar alerta después de 5 segundos
      setTimeout(() => setShowAlert(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "tu-email@ejemplo.com",
      link: "mailto:tu-email@ejemplo.com"
    },
    {
      icon: "📱",
      label: "Teléfono",
      value: "+56 9 1234 5678",
      link: "tel:+56912345678"
    },
    {
      icon: "📍",
      label: "Ubicación",
      value: "Santiago, Chile",
      link: "#"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "tu-perfil-linkedin",
      link: "https://linkedin.com/in/tu-perfil"
    }
  ];

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
                Ponte en Contacto
              </h1>
              <p className="lead text-responsive">
                ¿Tienes un proyecto en mente o quieres colaborar? 
                Me encantaría escuchar de ti. ¡Hablemos!
              </p>
            </div>
          </Col>
        </Row>

        {/* Alerta de éxito */}
        {showAlert && (
          <Row className="justify-content-center mb-4">
            <Col xs={12} lg={10}>
              <Alert variant="success" className="text-center">
                <strong>¡Mensaje enviado correctamente!</strong> Te responderé lo antes posible.
              </Alert>
            </Col>
          </Row>
        )}

        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <Row className="g-4">
              
              {/* Columna del formulario */}
              <Col xs={12} lg={7}>
                <Card className="border-0 shadow">
                  <Card.Body className="padding-responsive">
                    <h3 
                      className="mb-4"
                      style={{ 
                        fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                        color: '#495057'
                      }}
                    >
                      Envíame un Mensaje
                    </h3>
                    
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col xs={12} sm={6}>
                          <Form.Group className="mb-3" controlId="formGroupName">
                            <Form.Label className="text-responsive fw-semibold">
                              Tu Nombre *
                            </Form.Label>
                            <Form.Control 
                              type="text" 
                              name="name"
                              placeholder="Ingresa tu nombre completo" 
                              required 
                              value={formData.name}
                              onChange={handleChange}
                              className="py-2"
                              style={{ fontSize: '16px' }}
                            />
                          </Form.Group>
                        </Col>
                        
                        <Col xs={12} sm={6}>
                          <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="text-responsive fw-semibold">
                              Tu Email *
                            </Form.Label>
                            <Form.Control 
                              type="email" 
                              name="email"
                              placeholder="tu-email@ejemplo.com" 
                              required 
                              value={formData.email}
                              onChange={handleChange}
                              className="py-2"
                              style={{ fontSize: '16px' }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      <Form.Group className="mb-3" controlId="formGroupSubject">
                        <Form.Label className="text-responsive fw-semibold">
                          Asunto *
                        </Form.Label>
                        <Form.Control 
                          type="text" 
                          name="subject"
                          placeholder="¿De qué quieres hablar?" 
                          required 
                          value={formData.subject}
                          onChange={handleChange}
                          className="py-2"
                          style={{ fontSize: '16px' }}
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-4" controlId="formGroupMessage">
                        <Form.Label className="text-responsive fw-semibold">
                          Mensaje *
                        </Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={6} 
                          name="message"
                          placeholder="Cuéntame sobre tu proyecto, idea o consulta..." 
                          required 
                          value={formData.message}
                          onChange={handleChange}
                          style={{ 
                            fontSize: '16px',
                            resize: 'vertical',
                            minHeight: '120px'
                          }}
                        />
                      </Form.Group>
                      
                      <Button 
                        variant="primary" 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-100 py-2"
                        style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              {/* Columna de información de contacto */}
              <Col xs={12} lg={5}>
                <Card className="border-0 shadow h-100">
                  <Card.Body className="padding-responsive">
                    <h3 
                      className="mb-4"
                      style={{ 
                        fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                        color: '#495057'
                      }}
                    >
                      Información de Contacto
                    </h3>
                    
                    <p className="text-responsive mb-4">
                      Si prefieres contactarme directamente, aquí tienes todas mis redes y medios de contacto. 
                      ¡No dudes en escribirme!
                    </p>
                    
                    <div className="mb-4">
                      {contactInfo.map((contact, index) => (
                        <div key={index} className="d-flex align-items-center mb-3">
                          <div 
                            className="me-3 text-center"
                            style={{ 
                              width: '40px', 
                              height: '40px',
                              backgroundColor: '#f8f9fa',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '1.2rem'
                            }}
                          >
                            {contact.icon}
                          </div>
                          <div className="flex-grow-1">
                            <div className="fw-semibold text-responsive">
                              {contact.label}
                            </div>
                            <a 
                              href={contact.link}
                              className="text-decoration-none text-responsive"
                              style={{ color: '#6c757d' }}
                            >
                              {contact.value}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-top pt-4">
                      <h5 className="mb-3">Horarios de Respuesta</h5>
                      <p className="text-responsive mb-2">
                        <strong>Lunes a Viernes:</strong> 24-48 horas
                      </p>
                      <p className="text-responsive mb-0">
                        <strong>Fines de semana:</strong> 48-72 horas
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>
          </Col>
        </Row>

        {/* Sección adicional - FAQ rápida */}
        <Row className="justify-content-center mt-5">
          <Col xs={12} lg={10}>
            <Card className="border-0 bg-light">
              <Card.Body className="padding-responsive text-center">
                <h4 className="mb-3">¿Preguntas frecuentes?</h4>
                <Row>
                  <Col xs={12} md={4} className="mb-3">
                    <h6>¿Cuánto tiempo toma un proyecto?</h6>
                    <p className="small text-muted">
                      Depende del alcance, generalmente entre 2-8 semanas.
                    </p>
                  </Col>
                  <Col xs={12} md={4} className="mb-3">
                    <h6>¿Trabajas de forma remota?</h6>
                    <p className="small text-muted">
                      Sí, trabajo 100% remoto con clientes de todo el mundo.
                    </p>
                  </Col>
                  <Col xs={12} md={4} className="mb-3">
                    <h6>¿Ofreces mantenimiento?</h6>
                    <p className="small text-muted">
                      Sí, ofrezco soporte y mantenimiento post-entrega.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  ); 
}