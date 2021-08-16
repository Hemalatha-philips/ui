import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: ${props => props.width ? props.width:'500px'};

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  border-radius: 0.5rem;

  margin: 20px auto;
  transition: all 0.25s ease-in-out;
  box-shadow: 15px 20px 70px -10px;
`;


interface QCardProps {
	width?:string
}
export const QCard:React.FC<QCardProps> = ({width,children}) => {
	 return <StyledContainer width={width ? width:'500px'}>{children}</StyledContainer>
}