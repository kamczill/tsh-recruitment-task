import { IconProps } from 'assets/icons/iconTypes';

export const CheckIcon = ({ color }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="check">
        <path
          id="Path"
          d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
