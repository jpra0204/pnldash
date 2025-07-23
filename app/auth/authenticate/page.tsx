import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function AuthenticationForm() {
  return (
    <div className="p-8">
      <h1>Authenticate</h1>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}
