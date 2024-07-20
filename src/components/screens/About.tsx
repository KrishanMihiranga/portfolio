import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import {IoMdArrowBack} from "react-icons/io";

function About() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[93%]">
        <h1>About page</h1>
        <Button onClick={()=> navigate(-1)}><IoMdArrowBack size={30} color="black"/></Button>
    </div>
  )
}

export default About