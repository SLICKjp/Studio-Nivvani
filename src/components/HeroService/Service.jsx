import './service.css';

const Service = ({title,description,image}) => {
  return (
    <div>
      <img className="hero-service-img" src={image} alt="" />
      <p className="hero-service-heading">{title}</p>
      <p className="hero-service-text">{description}</p>
    </div>
  )
}

export default Service