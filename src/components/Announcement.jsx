import styled from "styled-components";
import { Add} from "@material-ui/icons";
import { mobile } from "../responsive";
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  margin: 50px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  font-size:16px;
  width:100%;
  ${mobile({ width: "50px" })}
`;

const Announcement = () => {
  return <SearchContainer>
  <Input placeholder="Type your question here" />
  <Add style={{ color: "gray", fontSize: 32 }} />
</SearchContainer>;
};

export default Announcement;
