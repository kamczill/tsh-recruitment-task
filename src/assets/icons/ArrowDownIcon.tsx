import { IconProps } from 'assets/icons/iconTypes';

export const ArrowDownIcon = ({ color }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="arrow_drop_down">
        <path id="Path" d="M7 10L12 15L17 10H7Z" fill={color} />
      </g>
    </svg>
  );
};
