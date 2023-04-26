# Pharmacy-Central-System

<h3> Projeto final do Módulo 1 do curso de FullStack</h3>

## Menu

-[Sobre](#Sobre) </br>
-[Páginas](#Páginas) </br>
-[ComoFunciona](#ComoFunciona)</br>
-[PontosDeMelhorias](#PontosDeMelhorias)

## Sobre

<P>Para este projeto tivemos como proposta a criação de um sistema online que gerencie
farmácias e medicamentos, onde utilizei a biblioteca React para esta criação.</p>


<p> Estrutura tinha que contar uma página de Login, uma lista de farmácias, uma de cadastro de farmácias, 
uma de lista de medicamentos, uma de lista de medicamentos, além de um Menu.</p>

## Páginas

<h3> Página de Login</h3>
<p> Para a criação da página de Login utilizei o Hook useState do React e para direcionar o usuário para outra página
utilizei o useNavigate do React Router Dom. Os formulários foram feitos com conhecimento de HTML e Css</br>
O requisito para esta página é que o usuário seja um e-mail e que a senha tenha no 8 caractéres ou mais sendo 
que tem que ter números e letras, além disso quando o usuário fizer o Login ele será redirecionado para a página 
de lista de farmácias já cadastradas. </p>

<h3>Lista de Farmácias</h3>
<p> Para a criação desta página utlizei React bootstrap, onde nela consta as farmácias já cadastradas
em forma de uma tabela que aparece somente o nome e o telefone, coloquei um botão de Informções utilizando um Modal, onde 
ao clicar nele aparece as infomações completas que são os dados do cadastro da farmácia.</p>

<h3> Cadastrar Farmácia </h3>
<p> Como requisito nesta página criei um formulário, onde contém os campos obrigatórios de Razão social, cnpj, nome fantasia, e-mail, telefone,
celular, endereço(contendo o Cep, logradouro, número e bairro) e por fim um campo opcional de complemento. </br>
Para a criação do cep foi usado um API do ViaCEP do IBGE, que faz o preenchimento automático dos campos de logradouro, bairro e cidade, ficando 
para o uruário preencher somente os campos de número e complemento. Ao finalizar o cadastro o usuário recebe uma mensagem de cadastro feito com sucesso! </br>
Para a validação dos campos usei o método de onSubmit que foi dado como requisito, os dados são salvos no localStorage que simula um banco de dados.</p>

<h3> Lista de Medicamentos</h3>
<p> Para a criação desta página utilizei o boostratp. </br>
Para a listagem dos medicamentos utilizei Cards e dentro dos Cards um botão de Modal que detalha os dados do medicamento cadastrado.
Para a representação do medicamento utilizei uma imagem que represente um medicamento.</p>

<h3> Cadastro de Medicamento</h3>
<p> Criei um formulário contendo os dados a serem preenchidos do medicamento que são: nome do medicamento, laboratorio, dosagem, descrilção, preço e o tipo de medicamento. </br>
para o tipo do medicamento criei um campo de selecionar que fica como opção comum ou controlado. </br>
Os dados cadastrados são salvos no localStorage.</p>

<h3> Cadastro de Usuário</h3>
<p>Como proposta do projeto, tinhamos que criar uma página com funcionalidade extra, na qual eu escolhi criar uma página de cadastro,
que segue os parâmetros da página de Login.</p>

<h3>Página de  Menu <h3>
<p>Por fim criei uma lista de Menu de navegação para as rotas dentro das páginas. </p>

## ComoFunciona

<h3> Como Funciona o sistema </h3>
<p> Primeiro fazer o clone do projeto e instalar as dependências: react-bootstrap, react-router-dom que foram usadas para a elaboração deste projeto. </br>
Ao fazer ele rodar no navegador a primeira página a abrir será o de login, onde para acessar basta colocar um e-mail e uma senha que deve conter letras e números com no mínimo 8 caracteres.</br>
Ao efetuar o login o usuário será direcionado para a página de lista de farmácias, onde vai conter todas as farmácias já cadastradas e ao lado tem um botão informações 
feito através de um Modal no qual trás todos os dados preenchidos no cadastro da farmácia. </br>
Para o cadastro da farmácia temos os dados principais como nome, nome fatasia, cnpj e telefones, além do endereço que ao colocar o cep os campos de endereço, bairro, cidade e estado são preenchidos automáticos, ficando para o usuário preencher somente o número e o complemento que neste caso o complemento é opcional. </br>
Para cadastrar um medicamento, basta clicar em cadastrar medicamento no menu que já redireciona para a página de cadastro, onde todos os campos devem ser preenchido sendo apenas a descrição como opcional. Ao clicar no botão cadastrar o usuário será direcionado a página de lista de medicamentos, no qual é feito em Card tendo um botão Detalhes que ao clicar neste botão aparece as informções do medicamento.</br>
Por fim ao clicar em Logout o usuário é redirecionado para a página de login novamente.</br>
Os dados dos cadastro são salvos no LocalStorage no qual simula um Banco de Dados.
</br>
Como uma funcionalidade extra criei a página de cadastro do usuário no qual seguem das mesma regras da página de login, tendo que ser preenchidos o e-mail e a senha com no mínimo 8 caracteres entre letras e números.


## PontosDeMelhorias

<h3>Pontos de melhorias</h3>

<p> Primeiramente, como melhoria seria a estilização, pois tem muitas coisas que ao meu ver podem ser melhorados, como por exemplo os alinhamentos, tamanhos, formato do formulário, enhtre outros. </br>
Cabe aqui na melhoria também colocar a responsividade, o mapa, no formulário poderia melhorar alguns requisitos como para telefone e cnpj. </br>
O que me preocupou e que fica também como ponto de melhoria é o uso do Git Flow que acabei me perdendo ao fazer as Branch e commits.
