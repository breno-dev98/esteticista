import CustomAlert from "./UI-Components/CustomAlert";

const Teste = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col m-2 gap-2">
          <CustomAlert type="success" message="Operação realizada com sucesso!" />
          <CustomAlert type="error" message="Ocorreu um erro inesperado." />
          <CustomAlert type="warning" message="Atenção! Verifique os detalhes." />
          <CustomAlert type="info" message="Aqui está uma informação importante." />
      </div>
    </div>
  );
};

export default Teste;
