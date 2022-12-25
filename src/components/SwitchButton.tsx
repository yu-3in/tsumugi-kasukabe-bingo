import React from 'react';

type Props = {
  label: string;
  checked?: boolean;
  onChange: () => void;
};

const SwitchButton: React.FC<Props> = ({ label, checked = false, onChange }) => {
  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" checked={checked} onChange={onChange} />
      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      <span className="ml-3  font-medium text-gray-900">{label}</span>
    </label>
  );
};

export default SwitchButton;
