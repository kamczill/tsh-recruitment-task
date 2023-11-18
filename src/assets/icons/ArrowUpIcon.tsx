import { IconProps } from 'assets/icons/iconTypes';

export const ArrowUpIcon = ({ color }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="arrow_drop_up">
        <path id="Path" d="M17 15L12 10L7 15L17 15Z" fill={color} />
      </g>
    </svg>
  );
};
