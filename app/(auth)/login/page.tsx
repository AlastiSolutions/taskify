import { AuthFormType } from "@/constants/auth.types";
import AuthFormField from "../AuthFormField";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="container flex flex-col items-centerd bg-white text-slate-800 rounded-md p-6 mt-12 mx-auto w-[50%] shadow-md">
        <AuthFormField
          inputName="email"
          inputId="email"
          formType={AuthFormType.EMAIL}
          label="Email"
        />
        <AuthFormField
          inputName="password"
          inputId="password"
          formType={AuthFormType.PASSWORD}
          label="Password"
        />
      </div>
    </>
  );
};

export default LoginPage;
