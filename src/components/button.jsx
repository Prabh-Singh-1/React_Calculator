import './button.css';

const Button = (props) => {
  return (
    <div onClick={() => props.onclick(props.value)} className={`${props.className} button`}>
      {props.value}
    </div>
  );
}

export default Button;
