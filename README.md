<h3>React com Typescript: desenvolvendo uma área administrativa</h3>

- Styled-components é uma biblioteca para React que permite escrever estilos CSS para seus componentes em JavaScript. Ele fornece uma maneira de definir estilos reutilizáveis para o componente ao qual pertencem. Isso significa que os estilos definidos para um componente não afetarão nenhum outro componente ou elemento na página.
Com styled-components, você pode escrever estilos CSS usando uma sintaxe semelhante ao CSS regular, mas com os benefícios adicionais de props dinâmicos e variáveis. Você pode usar expressões e funções JavaScript para gerar estilos com base em props passados para seu componente, permitindo que você crie designs dinâmicos e responsivos. Usando essa funcionalidade conseguimos inserir imagens dinâmicas de fundo para os títulos da página.

- Em React, um hook é uma função especial que permite que você adicione recursos extras a um componente funcional. Com os hooks, você pode usar coisas como estado (state), ciclos de vida (lifecycle) e outros recursos do React em componentes funcionais, que são as funções usadas para construir a interface do usuário. Antes dos hooks, era necessário usar componentes de classe para acessar esses recursos. Com os hooks, no entanto, você pode usar essas funcionalidades em componentes funcionais, tornando-os mais poderosos e fáceis de escrever e manter.Alguns exemplos de hooks populares incluem o useState, que permite que você adicione e gerencie o estado em um componente funcional, e o useEffect, que permite que você execute código em momentos específicos do ciclo de vida do componente.

Os hooks são uma adição valiosa ao React, pois eles oferecem uma forma mais simples e direta de trabalhar com recursos avançados em componentes funcionais. Eles ajudam a tornar o código mais legível, reutilizável e fácil de entender.
- O useEffect é um hook que serve para fazermos algo depois do carregamento da página. Então, como a requisição da API pode demorar um pouco mais que o carregamento da página, nós garantimos esse carregamento posterior dos resultados da API. Este hook é utilizado para executar algum efeito após a renderização da página. É utilizado para executar uma função assim que um componente é montado, assim como quando o componente sofre atualizações. O useEffect permite que você execute efeitos colaterais em componentes funcionais. Efeitos colaterais são ações que ocorrem fora do fluxo normal de renderização, como buscar dados de uma API, manipular o DOM ou assinar eventos.
```
import React, { useState, useEffect } from 'react';

function DataFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```

O useEffect recebe duas funções: a primeira é a função de efeito em si, que contém a lógica a ser executada, e a segunda é um array de dependências opcional. O array de dependências permite especificar quando o efeito deve ser executado novamente com base em valores específicos.

- Um dos hooks mais famosos é o useState, que permite que você adicione estado a um componente funcional. O estado é como uma memória do componente, onde ele pode armazenar informações importantes. Com o useState, você pode criar uma variável de estado e uma função para atualizá-la. Assim, toda vez que o estado mudar, o React irá atualizar o componente automaticamente.
```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
Nesse exemplo, o useState é utilizado para adicionar o estado count ao componente Counter. O valor inicial do estado é definido como 0. A função setCount é utilizada para atualizar o valor do estado quando o botão é clicado.

* Biblioteca MUI:


Para construir a tabela foi utilizado a biblioteca MUI, uma estrutura popular do React UI que fornece um conjunto de componentes de interface do usuário reutilizáveis e personalizáveis com base nas diretrizes de design de materiais do Google.O MUI é amplamente utilizado em muitos aplicativos da Web de nível de produção e possui uma comunidade vibrante e ativa que contribui para seu desenvolvimento e manutenção. Para instalar a biblioteca em seu projeto você pode escrever o seguinte comando no terminal:
npm install @mui/material @emotion/react @emotion/styled

```
if (consultas && profissionais) {
    data = profissionais.map((profissional) => ({
        nome: profissional.nome,
        consultas: consultas.filter((consulta) =>
            consulta.profissional.some((p) => p.nome === profissional.nome)
        ).length,
    }));
}

O método filter é usado para filtrar elementos da lista consultas que possuem o mesmo nome do profissional.
O método filter está sendo usado para filtrar elementos da lista consultas que possuem o mesmo nome do profissional e depois retornar um array.
```

Métodos de array são funções nativas em JavaScript que permitem a manipulação e transformação de elementos em um array. Esses métodos podem ser usados para adicionar, remover, pesquisar e filtrar elementos em um array, entre outras tarefas.

map: cria um novo array com o resultado de uma função aplicada a cada elemento do array original;
filter: cria um novo array com todos os elementos que atendem a um determinado critério;
some: testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída.
Utilizados no seguinte trecho de código:
```
 data = profissionais.map((profissional) => ({
            nome: profissional.nome,
            consultas: consultas.filter((consulta) =>
                consulta.profissional.some((p) => p.nome === profissional.nome)
            ).length,
        }));

Que podemos ler como: está sendo criado um array a partir do array de profissionais com o método map.
Para cada profissional está sendo criado um objeto que possui a propriedade “nome” que recebe o nome do profissional, e também a propriedade consultas. O valor de consultas é definido por um filtro (filtro) que retorna um array com as consultas que retornem uma condição verdadeira.
Para fazer essa verificação, é utilizado o método some pra verificar se o nome do profissional naquela consulta é o mesmo nome do profissional que estamos verificando.
Como só precisamos do número de consultas, terminamos esse filtro com a propriedade length que informa a quantidade de itens naquele array.
```
