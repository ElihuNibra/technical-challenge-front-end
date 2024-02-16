import { Button } from "../ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DetailElement(){
    return (
        <div className="flex flex-col items-center mt-10 mx-10 border shadow-md rounded-lg w-[80%] gap-8">
            <header className="w-full flex justify-between gap-8">
                <div className="w-full flex justify-center">
                <Alert className="w-fit border-green-500 text-green-500 text-sm">
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
                </div>
                <div><Button className="bg-slate-300 text-black">Nuevo archivo</Button></div>
            </header>
        <label className="text-3xl " htmlFor="">Selecciona un archivo</label>
        <input className="border rounded-md bg-slate-300" type="file" name="" id="" />
        <Button className="bg-purple-900 text-xl">Subir archivo</Button>
        </div>
    )
}