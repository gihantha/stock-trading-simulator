interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  labelClassName?: string; // this is fine
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
  labelClassName, // <- this is being passed to DOM by mistake
  required,
}) => {
  return (
    <div className="flex flex-col">
      {/* Don't pass labelClassName to <label> as DOM prop */}
      <label className={labelClassName}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        required={required}
      />
    </div>
  );
};

export default InputField;
