import './button.css';

const Button = (props) => {
  return (
    <div className='grid-btn-container'>
     <input className="grid-btn" type="button" value={props.name}/>
    </div>
  )
}

export default Button