import { Button } from "../ui/button";

function Login() {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-20">
        <h1 className="text-2xl font-bold">Sistema de carga de datos</h1>
        <div className="mx-8 mt-10">
          <form className="flex flex-col gap-4" action="">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input className=" px2 py-1 border border-slate-600 rounded-md outline-none" type="text" name="" id="" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input className=" px2 py-1 border border-slate-600 rounded-md outline-none" type="text" name="" id="" />
            </div>
            <div className="flex flex-col gap-2">
              <Button>Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
