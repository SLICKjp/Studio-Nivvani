import './button.css';

const Button = (props) => {
  return (
    <>
     <input className="grid-btn" type="button" value={props.name}/>
    </>
  )
}

export default Button