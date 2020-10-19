export const genOffSet = () => Math.ceil(Math.random() * (11 - 1) + 1);

export const getColor = () => {
  const colors = [
    '#008000',
    '#27ae60',
    '#FF0000',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#0000FF',
    '#FF00FF',
    '#52D017',
    '#77B1A9',
    '#73A857',
  ];
  return colors[genOffSet()];
};

export const fetchQuote = async (offSet = 1) => {
  const data = await fetch(
    `https://api.paperquotes.com/apiv1/quotes/?limit=1&offset=${offSet}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token 82f599a9a73da322c7c4f71154bf8d7a53619684',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((e) => console.error(e));

  const [message, author] = data.results[0]?.quote?.split('.');
  return { message, author };
};
