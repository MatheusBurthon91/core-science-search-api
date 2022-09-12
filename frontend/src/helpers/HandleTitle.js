const handleTitleForRender = (array) => {
  if (array.length === 0) {
    return ' informação não encontrada...';
  }
  if (array.length > 6) {
    return ` ${array.slice(0, 6).join(' | ').concat('...')}`;
  }
  return ` ${array.join(' | ')}`;
};

export default handleTitleForRender;
