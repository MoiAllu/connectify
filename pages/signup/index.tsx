import type { NextPage } from "next";
import SignUpForm from "../../components/SignUpForm";

const SignUp: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-70px)]  px-4">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
