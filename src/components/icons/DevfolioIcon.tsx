import React from 'react';

interface DevfolioIconProps {
  size?: number;
  className?: string;
}

const DevfolioIcon: React.FC<DevfolioIconProps> = ({ size = 20, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M200 400C310.457 400 400 310.457 400 200C400 89.543 310.457 0 200 0C89.543 0 0 89.543 0 200C0 310.457 89.543 400 200 400Z"
        fill="currentColor"
      />
      <path
        d="M150 200C150 172.386 172.386 150 200 150C227.614 150 250 172.386 250 200C250 227.614 227.614 250 200 250C172.386 250 150 227.614 150 200Z"
        fill="white"
      />
    </svg>
  );
};

export default DevfolioIcon; 