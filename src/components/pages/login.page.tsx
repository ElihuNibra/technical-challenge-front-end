import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

export default function Login() {
  const { toast } = useToast();

  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (data.email.length && data.password.length) {
      const response = fetchLogin();
      if (!response) {
        toast({
          variant: "destructive",
          title: "Error!",
          description: "Error en la autenticación",
        });
      } else {
        toast({
          title: "Ok",
          description: "Autenticación realizada exitosamente. Redirigiendo",
        });
      }
    }
  }

  function fetchLogin() {
    if (data.email === "admin@mail.com" && data.password === "admin") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="w-full flex justify-center">
      <div className="mt-20">
        <h1 className="text-4xl font-bold font-familjen-grotesk">
          Sistema de carga de datos
        </h1>
        <div className="mx-8 mt-10">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                className=" px2 py-1 border border-slate-600 rounded-md outline-none"
                type="text"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input
                className=" px2 py-1 border border-slate-600 rounded-md outline-none"
                type="text"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button className="bg-purple-900 text-xl">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
