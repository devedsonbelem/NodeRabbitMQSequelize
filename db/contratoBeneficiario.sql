os ccreate database m01 ;
use m01;

create table estadoCivil (id int primary key, descricao varchar(255));
create table orgaoEmissor (id int primary key, descricao varchar(255));
create table profissao (id int primary key, descricao varchar(255));
create table tipoContratacao (id int primary key, descricao varchar(255));
create table acomodacao (id int primary key, descricao varchar(255));
create table fatorModerador (id int primary key, descricao varchar(255));
create table cobertura (id int primary key, descricao varchar(255));
create table abrangenciaGeografica (id int primary key, descricao varchar(255));
create table areaAtuacao (id int primary key, descricao varchar(255));

create table endereco (id int primary key, 
cep varchar(255), logradouro varchar(255),
numero varchar(255),complemento varchar(255),
 bairro varchar(255),
cidade varchar(255), uf varchar(255));

create table movimentacao (id int primary key,
corretora varchar (255),supervisor varchar (255), corretor varchar (255),
cpfTitular varchar (255), nomeCompletoTitular varchar (255), dataNascimentoTitular date,
dataNascimentoTitular date, nomeMaeTitular varchar (255), sexoTitular varchar (255),
estadoCivilTitular varchar (255), rg varchar (255),orgaoEmissorRgTitular varchar (255),
cnsTitular varchar (255), dnvTitular varchar (255), emailTitular varchar (255), telefoneTitular varchar (255),
telefoneFixo varchar (255),cepTitular varchar (255), logradouroTitular varchar (255),
numeroTitular varchar (255), complementoTitular varchar (255), bairroTitular varchar (255),
estadoTitular varchar (255), cidadeTitular varchar (255),cpfDependente varchar (255),
nomeCompletoDependente varchar (255), dataNascimentoDependente date,
nomeMaeDependente varchar (255), sexoDependente varchar (255), estadoCivilDependente varchar (255),
grauParentescoDependente varchar (255), cnsDependente varchar (255), dnvDependente varchar (255),
cpfResponsavelFinanceiro varchar (255), nomeCompletoResponsavelFinanceiro varchar (255),
orgaoEmissorResponsavelFinanceiro varchar (255), entidadeXOperadora varchar (255),
plano varchar (255), dataVigenciaMensal date, dataVencimentoMensal date);


create table dependente (id int primary key, cpf varchar(255), nome varchar(255),
 dataNascimento date, nomeMae varchar(2), cns varchar(255), dnv varchar(255),
valorPlano double, idade int, numeroCarteirinha varchar(255));

create table subcontrato(id int primary key);
create table contrato (id int primary key);
create table operadora (id int primary key,
 cnpj varchar(500) ,
  nome varchar(255),
   site_operadora varchar(255),
    telefone varchar(500));

create table entidade (id int primary key, 
sigla varchar(255), 
nome varchar(500) );

create table corretora (id int primary key,
 cnpj varchar(255),
  nome varchar(255) ,
   razaoSocial varchar(255),
    possuiSupervisor boolean,
     codigo varchar(255),
      email varchar(255),
      intAtivo boolean,
       indLiberacaoColaborador boolean
       );

create table administradora (id int primary key,
 codigoANS varchar(255), site varchar(255) , telefone varchar(255), cnpj varchar(255),
 nomeFantasia varchar(255), razaoSocial varchar(255));


create table corretor (id int primary key, 
cpf varchar(255), 
nome varchar(255) , 
email varchar(255), 
celular varchar(255));

create table titular( id int primary key , cpf varchar(25), 
rg varchar (25), nome varchar(255), dataNascimento date, nomeMae varchar (255),
 sexo varchar(1), cns varchar (255),dnv varchar (255),
email varchar (255), dddTelefone varchar(5), numTelefone varchar(25), 
dddCelular varchar(5), numCelular varchar(25), valor double,
 idade int , numeroCarteirinha int, representanteLegal boolean,
carencia boolean, id_estadoCivil int, id_orgaoEmissor int,
id_endereco int, id_dependente int, id_profissao int,
foreign key(id_estadoCivil) references estadoCivil(id),
foreign key(id_orgaoEmissor) references orgaoEmissor(id),
foreign key(id_endereco) references endereco(id),
foreign key(id_dependente) references dependente(id),foreign key(id_profissao) references profissao(id) );

create table supervisor (id int primary key, 
id_corretor int,id_corretora int, 
foreign key(id_corretora) references corretora(id),
foreign key(id_corretor) references corretor(id) );

create table plano (id int primary key, 
nome varchar (255), 
codigoANS varchar(500), adicionais varchar (255),formacaoDePreco int,
quantidadeVidas int, valorTotal int, valorTotalTabela int, 
recorrenciaPromocaoMeses int,
indPromocional boolean, indPossuiOpcional boolean, 
id_tipoContratacao int, id_acomodacao int, id_fatorModerador int, 
id_cobertura int, id_areaAtuacao int,
id_abrangenciaGeografica int, id_operadora int,
foreign key(id_tipoContratacao) references tipoContratacao(id), foreign key(id_acomodacao) references acomodacao(id) ,
foreign key(id_acomodacao) references acomodacao(id),foreign key(id_fatorModerador) references fatorModerador(id),
foreign key(id_cobertura) references cobertura(id),
foreign key(id_abrangenciaGeografica) references abrangenciaGeografica(id),
foreign key(id_areaAtuacao) references areaAtuacao(id),
foreign key(id_operadora) references operadora(id));

create table contrato_beneficiario(id int primary key, dataVigencia date, dataVencimento date,
valorTotal double ,
valorTaxaAssociativa double,  
taxaCadastro double, valorTotalMensal double, 
numeroProposta varchar (255),
qtdRecorrenciaAnualTaxaAssociativa int, 
descricaoRecorrenciaTaxaAssociativa varchar(255), 
id_subcontrato int, id_contrato int, id_operadora int, 
id_entidade int, 
id_plano int,
id_titular int, id_corretora int, id_administradora int, 
id_corretor int, id_supervisor int,
foreign key(id_subcontrato) references subcontrato(id),
foreign key(id_contrato) references contrato(id),
foreign key(id_operadora) references operadora(id),
foreign key(id_plano) references plano(id),
foreign key(id_titular) references titular(id),
foreign key(id_administradora) references administradora(id),
foreign key(id_corretora) references corretora(id),
foreign key(id_corretor) references corretor(id),
foreign key(id_supervisor) references supervisor(id));