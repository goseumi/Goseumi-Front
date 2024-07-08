const useFoodReplace = (OriginData) => {
  //커스텀 훅 말고 일반 js함수로 일단 생성
  let text = OriginData;
  text = text.replace(/<br\s*\/?>/g, '\n');
  text = text.replace(/\([^)]*\)/g, '');
  text = text.replace(/[*@]/g, '');

  return text;
};

export default useFoodReplace;
