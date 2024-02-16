import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Formik } from "formik";
import { loginSchema } from "../models/login.model";
import { Navigate, useNavigate } from "react-router";

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  function handleSubmit(values: any) {
    const response = fetchLogin(values);
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
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }

  function fetchLogin(values: any) {
    if (values.email === "admin@mail.com" && values.password === "admin") {
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
          <Formik
            initialValues={data}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Email</label>
                  <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className=" px2 py-1 border border-slate-600 rounded-md outline-none"
                  />
                  <span className="text-sm text-red-500">{errors.email && touched.email && errors.email}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Password</label>
                  <input
                    autoComplete="off"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className=" px2 py-1 border border-slate-600 rounded-md outline-none"
                  />
                  <span className="text-sm text-red-500">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-900 text-xl hover:bg-purple-950"
                >
                  Login
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
