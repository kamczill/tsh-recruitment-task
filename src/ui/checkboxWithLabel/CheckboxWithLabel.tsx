import { CheckIcon } from 'assets/icons/CheckIcon';

import { CheckboxProps } from './CheckboxWithLabel.types';

export const CheckboxWithLabel = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <div className="relative">
        <input type="checkbox" checked={checked} onChange={onChange} className="opacity-0 absolute h-5 w-5" />
        <div
          className={`border rounded h-5 w-5 flex items-center justify-center ${
            checked ? 'bg-blue-500 border-blue-500' : 'border-lighterGray'
          }`}
        >
          {checked && <CheckIcon color="#ffffff" />}
        </div>
      </div>
      <span className="text-gray-700">{label}</span>
    </label>
  );
};
