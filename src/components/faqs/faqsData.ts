export type FaqsType = {
  id: number;
  question: string;
  answer: string;
};

export const faqsData: FaqsType[] = [
  {
    id: 1,
    question: "Quantos comics eles têm?",
    answer:
      "Atualmente temos toda a coleção Marvel. Algumas cópias podem ter pouca ou nenhuma disponibilidade no momento. Para mais informações você pode acessar https://marvel.com",
  },
  {
    id: 2,
    question: "Podemos reservar novos lançamentos?",
    answer:
      "Infelizmente nosso site ainda não aceita reservas antecipadas. Mas estamos trabalhando nessa funcionalidade. Siga nosso twitter para ficar por dentro das novidades.",
  },
  {
    id: 3,
    question: "Quanto tempo demoram as entregas?",
    answer:
      "Todas as nossas entregas são enviadas através da DH-Express, que chega a todo o país em 24 horas.",
  },
  {
    id: 4,
    question: "Que métodos de pagamento estão disponíveis?",
    answer:
      "Apenas cartões de crédito Visa e Mastercard são aceitos. No momento não aceitamos pagamentos em dinheiro ou outros meios.",
  },
  {
    id: 5,
    question: "Aceitamos devoluções?",
    answer:
      "Nossas compras aceitam devoluções desde que o quadrinho esteja em sua embalagem original, caso contrário perdem o valor de revenda. Caso deseje devolvê-lo e ele estiver nas mesmas condições em que foi enviado, entre em contato com 11-5555-0001 para resolver a devolução.",
  },
];
