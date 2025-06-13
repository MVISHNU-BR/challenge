import { user } from "@/components/userTable";
const baseUrl = process.env.NEXT_PUBLIC_CONNECTION_STRING;

export async function postLogin(data: { email: string; password: string }) {
  console.log(baseUrl);
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Login inválido");
  }
  return response.json();
}

export async function postregister(data: user) {
  console.log(`${baseUrl}/users`);
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("falha ao registrar conta");
  }
  return response.json();
}
