# Pharmacy-Central-System

<h3> Projeto final do Módulo 1 do curso de FullStack</h3>

## Menu

-[Sobre](#Sobre) </br>
-[Páginas](#Páginas) </br>

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
de lista de farmácias já cadastradas </p>

<h3>Lista de Farmácias</h3>
<p> Para a criação desta página utlizei React bootstrap, onde nela consta as farmácias já cadastradas
em forma de uma tabela que aparece somente o nome e o telefone, coloquei um botão de Informções utilizando um Modal, onde 
ao clicar nele aparece as infomações completas que são os dados do cadastro da farmácia</p>

<h3> Cadastrar Farmácia </h3>
<p> Como requisito nesta página criei um formulário, onde contém os campos obrigatórios de Razão social, cnpj, nome fantasia, e-mail, telefone,
celular, endereço(contendo o Cep, logradouro, número e bairro) e por fim um campo opcional de complemento. </br>
Para a criação do cep foi usado um API do ViaCEP do IBGE, que faz o preenchimento automático dos campos de logradouro, bairro e cidade, ficando 
para o uruário preencher somente os campos de número e complemento. Ao finalizar o cadastro o usuário recebe uma mensagem de cadastro feito com sucesso! </br>
Para a validação dos campos usei o método de onSubmit que foi dado como requisito, os dados são salvos no localStorage que simula um banco de dados</p>

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

<h3> Menu <h3>
<p>Por fim criei uma lista de Menu de navegação para as rotas dentro das páginas </p>




