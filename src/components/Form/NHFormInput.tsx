import { Controller, useFormContext } from "react-hook-form";
import Styles from "../../styles/NHFormInput.module.css";

type TInputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const NHFormInput = ({ name, placeholder, type, required }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          autoComplete="off"
          className={Styles.NHInputContainer}
          {...field}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      )}
    />
  );
};

export default NHFormInput;
