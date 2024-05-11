import { Controller, useFormContext } from "react-hook-form";
import Styles from "../../styles/NHFormInput.module.css";

type TInputProps = {
  name: string;
  type?: string;
  placeholder?: string;
};

const NHFormInput = ({
  name,
  placeholder,
  type,
}: TInputProps) => {
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
        />
      )}
    />
  );
};

export default NHFormInput;
