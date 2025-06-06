import "./imagegrid.css";
import img_one from "../../assets/Hero/img_one.png";
import img_two from "../../assets/Hero/img_two.png";
import img_three from "../../assets/Hero/img_three.png";
import img_four from "../../assets/Hero/img_four.png";
import img_five from "../../assets/Hero/img_five.png";
import img_six from "../../assets/Hero/img_six.png";
import Button from "../Button/Button";


const ImageGrid = () => {
  return (
    <div className="img-grid-container">
      <h1 className="grid-title">CRAFTED BY STUDIO NIVVANI</h1>
      <div className="row">
        <img src={img_one} alt="" />
        <img src={img_two} alt="" />
        <img src={img_three} alt="" />
        </div>
        <div className="row">
        <img src={img_four} alt="" />
        <img src={img_five} alt="" />
        <img src={img_six} alt="" />
      </div>

     <div className="input-btn-container"> 
    <Button name="VIEW OUR PROJECTS"/>
    </div>
    </div>
  );
};

export default ImageGrid;
