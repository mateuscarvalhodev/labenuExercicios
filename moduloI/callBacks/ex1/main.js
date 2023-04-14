const infosPessoa = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos"
}

const upperCaseInfo = (infosPessoa) => {
  const newPersonUpperCase = {
  ...infosPessoa,
  nome: infosPessoa.nome.toUpperCase(),
  profissao: infosPessoa.profissao.toUpperCase(),
  username: infosPessoa.username.toUpperCase(),
  senha: infosPessoa.senha.toUpperCase(),
};

for (let properties in newPersonUpperCase) {
  let value = newPersonUpperCase[properties];
console.log(`o Valor da propriedade ${properties} é ${value}`);
}
return newPersonUpperCase;
}

  console.log(upperCaseInfo(infosPessoa));


  console.log(`o valor da propriedade ${infosPessoa}`);

