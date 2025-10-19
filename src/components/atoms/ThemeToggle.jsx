// src/components/atoms/ThemeToggle.jsx
import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = ({ className = '', variant = 'header' }) => {
	const { toggleTheme, isDark } = useTheme();

	const tooltipText = `Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`;

	const renderTooltip = (props) => (
		<Tooltip id="theme-toggle-tooltip" {...props}>
			{tooltipText}
		</Tooltip>
	);

	const getStyles = () => {
		const baseStyles = {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
			border: 'none',
			position: 'relative',
			overflow: 'hidden'
		};

		if (variant === 'header') {
			return {
				...baseStyles,
				width: '42px',
				height: '42px',
				borderRadius: '12px',
				backgroundColor: isDark ? 'rgba(240, 246, 252, 0.1)' : 'rgba(13, 17, 23, 0.08)',
				backdropFilter: 'blur(12px)',
				border: `1px solid ${isDark ? 'rgba(240, 246, 252, 0.16)' : 'rgba(13, 17, 23, 0.15)'}`,
			};
		}

		return {
			...baseStyles,
			width: '40px',
			height: '40px',
			borderRadius: '50%',
			backgroundColor: 'transparent',
			border: '1px solid var(--github-border)',
		};
	};

	return (
		<OverlayTrigger
			placement="bottom"
			delay={{ show: 250, hide: 100 }}
			overlay={renderTooltip}
		>
			<Button
				variant="link"
				onClick={toggleTheme}
				className={`theme-toggle ${className}`}
				aria-label={tooltipText}
				style={getStyles()}
			>
				<div
					className="theme-icon-wrapper"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						transform: isDark ? 'rotate(0deg)' : 'rotate(180deg)',
						transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
					}}
				>
					{isDark ? (
						<i 
							className="fas fa-sun" 
							style={{ 
								fontSize: variant === 'header' ? '18px' : '16px',
								color: '#ffd43b',
								textShadow: '0 0 8px rgba(255, 212, 59, 0.4)'
							}}
						/>
					) : (
						<i 
							className="fas fa-moon" 
							style={{ 
								fontSize: variant === 'header' ? '18px' : '16px',
								color: '#4a5568',
								textShadow: '0 0 4px rgba(74, 85, 104, 0.3)'
							}}
						/>
					)}
				</div>
			</Button>
		</OverlayTrigger>
	);
};

export default ThemeToggle;
