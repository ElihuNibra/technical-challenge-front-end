import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

export default function FormElement({ setSection }: { setSection: any }) {
  // seleccionara o no el archivo del usuario
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { toast } = useToast();

  // comprobación de la carga del achivo
  function handleSubmit() {
    if (selectedFile) {
      // maneja la carga del archivo
      toast({
        title: "Cargando...",
        description: "Estamos validando el archivo 🗃️",
        duration: 2000,
      });
      setTimeout(() => {
        setSection("detail");
      }, 2000);
    } else {
      toast({
        // maneja la falta del archivo
        variant: "destructive",
        title: "Hey !",
        description: "Primero selecciona un archivo 📂",
        duration: 2000,
      });
      setTimeout(() => {
        setSection("upload");
      }, 2000);
    }
  }

  return (
    <div className="flex flex-col items-center mt-10 mx-10 border shadow-md rounded-lg p-40 gap-8">
      <label className="text-3xl " htmlFor="">
        Selecciona un archivo
      </label>
      <input
        accept=".xlsx, .csv"
        className="border rounded-md bg-slate-300"
        type="file"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSelectedFile(e.target.files ? e.target.files[0] : null)
        }
      />
      <Button onClick={handleSubmit} className="text-xl bg-purple-800 hover:bg-purple-900">
        Subir archivo
      </Button>
    </div>
  );
}
