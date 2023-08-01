import React from 'react';
import './Button.css'; // Import your CSS file with button styles

const Button = ({ className, type, onClick, variant, color, disabled, size, fullWidth, disableElevation, children }) => {
  // Create a variable to hold the CSS class name for the button based on the props
  let buttonClassName = 'MeroButton'; // Default class

  if (variant === 'outlined') {
    buttonClassName += '-outlined'; // Add class for outlined variant
  } else if (variant === 'contained') {
    buttonClassName += '-contained'; // Add class for contained variant
  }

  if (color === 'primary') {
    buttonClassName += '-primary'; // Add class for primary color
  } else if (color === 'secondary') {
    buttonClassName += '-secondary'; // Add class for secondary color
  }

  if (size === 'lg') {
    buttonClassName += '-large'; // Add class for large size
  } else if (size === 'sm') {
    buttonClassName += '-small'; // Add class for small size
  }

  if (disabled) {
    buttonClassName += '-disabled'; // Add class for disabled state
  }

  if (fullWidth) {
    buttonClassName += '-fullWidth'; // Add class for full-width button
  }

  // Create an object to hold inline styles based on the props
  const buttonStyles = {};

  if (disableElevation) {
    buttonStyles.boxShadow = 'none'; // Apply custom boxShadow style if disableElevation is true
  }

  return (
    <button
      className={variant ? `${className} ${buttonClassName}` : "MeroButton"}
      type={type}
      onClick={onClick}
      style={buttonStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
