import React, { ReactElement } from "react";
import confetti from "canvas-confetti";

interface ConfettiButtonProps {
  children: ReactElement;
}

export function ConfettiButton({ children }: ConfettiButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Elegant, modern confetti burst
    confetti({
      particleCount: 90,
      spread: 65,
      origin: { y: 0.85 },
      colors: ["#6366f1", "#d946ef", "#ec4899", "#3b82f6", "#ffffff"]
    });
    
    // Call the original onClick if it exists
    if (children.props.onClick) {
      children.props.onClick(e);
    }
  };

  return React.cloneElement(children, {
    onClick: handleClick
  });
}
