import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function FormPublicar(props) {
  const [form, setForm] = useState({
    name: "",
    categoria: "",
    personalidade: "",
    foto: "",
    idade: "",
    raca: "",
  });

  const navigate = useNavigate();

  console.log(form);
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  //ESSA FUNÇÃO VAI ADD AS INFOS DENTRO DO OBJETO

  console.log(props);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://webdev103.cyclic.app/adotes2",
        form
      );

      if (props.setReload) {
        //ISSO AQUI SÓ RODA SE ELE ESTIVER NA HOME

        setForm({
          name: "",
          categoria: "",
          personalidade: "",
          foto: "",
          idade: "",
          raca: "",
        });
        props.setReload(!props.reload);
      } else {
        // ISSO AQUI SÓ VAI ACONTECE RQUANDO TIVER NO DETALHE
        navigate("/");
        toast.success("Publicação criada com sucesso!🥳");
      }
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente 😿");
    }
  }

  //FAZER O FORM PARA PUBLICAR O ANIMAL
  return (
    <div className="bg-[#794577] mt-20 p-8">

<h1 style={{ fontSize: "32px", fontWeight: 200, color: "white", marginBottom: "60px"}}>Quer divulgar um animal?</h1>


<form className="form">
  <div className="Line1 flex mb-8 gap-2">
    <div className="flex flex-col w-1/2">
      <label className="text-white text-left">Nome do animal</label>
      <input
        className="rounded bg-[#794577] outline-white border-white border-1.5 focus:outline-[#FAD35C]"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
    </div>

    <div className="flex flex-col w-1/2">
      <label className="text-white text-left">Raça</label>
      <input
        className="rounded bg-[#794577] outline-white border-white border-1.5 focus:outline-[#FAD35C]"
        type="text"
        name="raca"
        value={form.raca}
        onChange={handleChange}
      />
    </div>
  </div>

  <div className="Line2 flex mb-8 gap-2">
    <div className="flex flex-col w-1/2">
      <label className="text-white text-left">Categoria</label>
      <select className="rounded bg-[#794577] outline-white border-white border-1.5 focus:outline-[#FAD35C]" name="categoria" onChange={handleChange}>
        <option>Cachorro</option>
        <option>Gato</option>
        <option>Tartagura</option>
        <option>Avestruz</option>
        <option>Tartaruga</option>
        <option>Porco</option>
        <option>Cobra</option>
        <option>Jacaré</option>
      </select>
    </div>

    <div className="flex flex-col w-1/2">
      <label className="text-white text-left">Idade</label>
      <input
        className="rounded bg-[#794577] outline-white border-white border-1.5 focus:outline-[#FAD35C]"
        type="number"
        name="idade"
        value={form.idade}
        onChange={handleChange}
      />
    </div>
  </div>



  <div className="Line4 flex mb-8 gap-2">
    <div className="flex flex-col w-full">
      <label className="text-white text-left">Foto</label>
      <input
        className="rounded bg-[#794577] outline-white border-white border-1.5 focus:outline-[#FAD35C]"
        type="text"
        name="foto"
        value={form.foto}
        onChange={handleChange}
      />
    </div>
  </div>

  <div className="Line3 flex mb-8 gap-2">
    <div className="flex flex-col w-full">
      <label className="text-white text-left">Personalidade</label>
      <textarea
        className="rounded bg-[#794577] outline-white border-white border-1.5 focus:outline-[#FAD35C]"
        type="text"
        name="personalidade"
        value={form.personalidade}
        maxLength={500}
        rows={4}
        cols={80}
        onChange={handleChange}
      />
    </div>
  </div>
  <button
  onClick={handleSubmit}
  style={{
    width: "250px",
    height: "44px",
    border: "2px solid #794577",
    borderRadius: "12px",
    backgroundColor: "#FAD35C",
    color: "#794577",
    fontWeight: "600",
  }}
>
  Enviar
</button>
</form>

    </div>
  );
}
