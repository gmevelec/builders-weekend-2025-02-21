import React from "react";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
