import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FormPublicar from "../componets/FormPublicar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function DetailAnimal() {
  const params = useParams();
  const [animal, setAnimal] = useState({});
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    categoria: "",
    personalidade: "",
    foto: "",
    idade: "",
    raca: "",
  });

  useEffect(() => {
    async function fetchAnimal() {
      const response = await axios.get(
        `https://webdev103.cyclic.app/adotes2/${params.id}`
      );
      setAnimal(response.data);
      setForm(response.data);
    }
    fetchAnimal();
  }, [show]);
  console.log(animal);

  async function handleDelete() {
    await axios.delete(`https://webdev103.cyclic.app/adotes2/${params.id}`);
    toast.success("Publicação excluída com sucesso!");
    navigate("/");
  }

  function handleEditar() {
    setShow(true);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmitEdit(e) {
    e.preventDefault();

    await axios.put(`https://webdev103.cyclic.app/adotes2/${params.id}`, form);
    setShow(false);
  }

  return (
    <div>
      <div className="bg-gray-200 p-4 mb-4">
        <p className="text-xl font-semibold mb-2">{animal.name}</p>
        <p className="text-gray-600 mb-2">Idade: {animal.idade}</p>
        <p className="text-gray-600 mb-2">Raça: {animal.raca}</p>
        <p className="text-gray-600 mb-2">
          Personalidade: {animal.personalidade}
        </p>
        <p className="text-gray-600 mb-2">Categoria: {animal.categoria}</p>
        <img className="w-full h-auto" src={animal.foto} alt="Foto do animal" />
      </div>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleDelete}
      >
        Deletar
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleEditar}
      >
        Editar
      </button>
      <div className="mt-4">
        <FormPublicar />
      </div>

      {show === true && (
        <div className="Modal fixed inset-0 z-50 flex flex-col justify-center items-center rounded w-full shadow-md bg-black bg-opacity-70">
          <div className="Form w-2/3 bg-black">
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
                  <select
                    className="rounded bg-[#794577] outline-white border-white border-1.5 focus:outline-[#FAD35C]"
                    name="categoria"
                    onChange={handleChange}
                  >
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

              <div className="BotoesModal">
                <button
                  style={{
                    width: "50px",
                    height: "40px",
                    backgroundColor: "#2E2E2E",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "block",
                    margin: "0 auto",
                  }}
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Fechar
                </button>

                <button
                  style={{
                    width: "50px",
                    height: "40px",
                    backgroundColor: "#2E2E2E",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "block",
                    margin: "0 auto",
                  }}
                  onClick={handleSubmitEdit}
                >
                  Editar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
