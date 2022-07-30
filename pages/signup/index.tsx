import type { NextPage } from "next";
import SignUpForm from "../../components/SignUpForm";

const SignUp: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
