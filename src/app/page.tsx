import { InputWithLabel } from "@/components/inputWithLabel";

export default function Home() {
  return (
    <div>
      <div></div>
      <div>
        <h1>Login</h1>
        <InputWithLabel
          htmlFor="email"
          placeholder="Email"
          labelText="Email"
          value=""
        />
      </div>
    </div>
  );
}
