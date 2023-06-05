import { Col } from "react-bootstrap";
import {
  Link,BrowserRouter as Router
} from "react-router-dom";
export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <Link to={link}><h4>{title}</h4></Link>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
