// src/components/atoms/Loading.jsx
import React from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';

const Loading = ({ message = "Cargando..." }) => {
	return (
		<Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
			<Row>
				<Col className="text-center">
					<Spinner 
						animation="border" 
						variant="primary" 
						role="status"
						style={{ width: '3rem', height: '3rem' }}
						className="mb-3"
					/>
					<div>
						<p className="text-muted mb-0" style={{ fontSize: '1.1rem' }}>
							{message}
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Loading;
