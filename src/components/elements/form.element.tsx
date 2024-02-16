import { Button } from "../ui/button";

export default function FormElement() {
    return (
        <div className="flex flex-col items-center mt-10 mx-10 border shadow-md rounded-lg p-40 gap-8">
        <label className="text-3xl " htmlFor="">Selecciona un archivo</label>
        <input className="border rounded-md bg-slate-300" type="file" name="" id="" />
        <Button className="text-xl">Subir archivo</Button>
        </div>
    )
}