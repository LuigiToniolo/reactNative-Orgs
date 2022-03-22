//Foi criado esse mock de produtor de topo (topo da página), estamos utilizando esses dados de "boasVindas"
//e "legenda", que está sendo utilizado pelo serviço de carregamentoDados, está sendo carregado apenas
// uma vez pois estamos utilizando o componente didMount do react-native dentro do componente de classe
// do arquivo Topo.js.
// Transformar um componente de função em um componente de classe: Declarar uma classe e extender ao
//react.component -> igual foi feito em Topo.js.
// Para renderizar os dados que está nesse arquivo, utilizamos o render() e retornamos o nosso jsx com as
//tags e componentes.

const topo = {
    boasVindas: "Olá, Luigi",
    legenda: "Encontre os melhores produtores",
};

export default topo;