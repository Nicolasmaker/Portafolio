// src/components/ErrorBoundary.jsx
import React from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(_error, errorInfo) {
    this.setState({
      error: _error,
      errorInfo: errorInfo
    });
    
    const isDev = typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development';
    if (isDev) {
      console.error('Error capturado por ErrorBoundary:', _error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container fluid className="min-vh-100 d-flex align-items-center">
          <Row className="w-100">
            <Col md={8} lg={6} className="mx-auto">
              <Alert variant="danger" className="text-center">
                <Alert.Heading>
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  ¡Oops! Algo salió mal
                </Alert.Heading>
                <p className="mb-0">
                  Ha ocurrido un error inesperado en la aplicación.
                </p>
                <hr />
                <div className="d-flex gap-2 justify-content-center">
                  <Button 
                    variant="outline-danger" 
                    onClick={this.handleReload}
                    className="px-4"
                  >
                    <i className="fas fa-redo me-2"></i>
                    Recargar Página
                  </Button>
                  <Button 
                    variant="outline-secondary" 
                    href="/"
                    className="px-4"
                  >
                    <i className="fas fa-home me-2"></i>
                    Ir al Inicio
                  </Button>
                </div>
              </Alert>
              
              {typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development' && this.state.error && (
                <Alert variant="warning" className="mt-3">
                  <Alert.Heading>Información de Desarrollo</Alert.Heading>
                  <details>
                    <summary>Detalles del Error</summary>
                    <pre className="mt-2 text-small">
                      {this.state.error && this.state.error.toString()}
                      <br />
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                </Alert>
              )}
            </Col>
          </Row>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;