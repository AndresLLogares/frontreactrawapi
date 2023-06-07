import { FaAngleDoubleLeft } from "react-icons/fa";
import { StyledBackDiv, StyledButtonBack } from "../../styles/buttonBack";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <StyledBackDiv>
      <StyledButtonBack onClick={() => navigate(-1)}>
        <FaAngleDoubleLeft style={{ marginRight: 5 }} />
        Back
      </StyledButtonBack>
    </StyledBackDiv>
  );
}

export default ButtonBack;
