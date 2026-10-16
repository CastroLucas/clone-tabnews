// MeuConteudo.jsx
function obterDataHora() {
  const agora = new Date();
  const doisDigitos = (valor) => String(valor).padStart(2, '0');
  const ano = String(agora.getFullYear());//.slice(-2);

  return `${doisDigitos(agora.getDate())}/${doisDigitos(agora.getMonth() + 1)}/${ano} ${doisDigitos(agora.getHours())}:${doisDigitos(agora.getMinutes())}`;
}

export default function BoasVindas() {
  return (
    <div style={{ backgroundColor: '#4deaff', padding: '20px', borderRadius: '5px' }}>
      <h1>Welcome to the Home Page Lucas</h1>
      <h3>This is a simple Next.js application.</h3>
      <p>{obterDataHora()}</p>
    </div>
  );
}