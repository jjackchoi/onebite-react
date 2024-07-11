const Button = ({ text, color = "black", children }) => {
  // 이벤트 객체
  const onclickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onclickButton}
      onMouseEnter={onclickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
