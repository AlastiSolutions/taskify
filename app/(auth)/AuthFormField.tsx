import { AuthFormType } from "@/constants/auth.types";

type AuthFormFieldProps = {
  label: string;
  formType: AuthFormType;
  inputName: string;
  inputId: string;
};

const AuthFormField: React.FC<AuthFormFieldProps> = ({
  label,
  formType,
  inputId,
  inputName,
}) => {
  const defaultFormStyles =
    "p-4 bg-neutral-100 outline-none focus:outline-none w-[50%]";

  let formInput = <input></input>;

  if (formType === AuthFormType.EMAIL) {
    formInput = (
      <input
        type="email"
        name={inputName}
        id={inputId}
        className={defaultFormStyles}
      />
    );
  } else if (formType === AuthFormType.TEXT) {
    formInput = (
      <input
        type="text"
        name={inputName}
        id={inputId}
        className={defaultFormStyles}
      />
    );
  } else if (formType === AuthFormType.PASSWORD) {
    formInput = (
      <input
        type="password"
        name={inputName}
        id={inputId}
        className={defaultFormStyles}
      />
    );
  } else {
    formInput = <input name={inputName} id={inputId} hidden={true} />;
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-4">
        {label}
      </label>
      {formInput}
    </div>
  );
};

export default AuthFormField;
