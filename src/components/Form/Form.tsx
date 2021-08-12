import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const RowContainer = styled.div`
  width: 100%;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
font-size:12px;
rgba(200,200,200,0.8);
font-weight:500;
text-decoration:none;
`;

export const BoldLink = styled.a`
font-size:12px;
rgb(2, 0, 36,0.8);
font-weight:500;
text-decoration:none;
`;

export const FormInput = styled.input`
height:45px;
width:${props => props && props.width || '100%'};
border:1px solid rgba(200,200,200,0.03);
margin:2px 0px 2px 0px;
border-bottom:1.4px solid transparent;
padding:0px 10px;
outline:none;
font-size:12px;
transition: all 250ms ease-in-out;
&::placeholder{
	rgba(200,200,200,1);
}

&:not(:last-of-type){
	border-bottom:1.5px solid rgba(200,200,200,0.4);
}
&:focus{
	outline:none;
	border-bottom:2px solid rgb(2, 0, 36,0.8);
}
`;
export const FormTextArea = styled.textarea`
height:100px;
width:100%;
border:1px solid rgba(200,200,200,0.03);
font-weight:900;
overflow:hidden;
margin:2px 0px 2px 0px;
border-bottom:1.4px solid transparent;
padding:0px 10px;
outline:none;
font-size:12px;
transition: all 250ms ease-in-out;
&::placeholder{
	rgba(200,200,200,1);
}

&:not(:last-of-type){
	border-bottom:1.5px solid rgba(200,200,200,0.4);
}
&:focus{
	outline:none;
	border-bottom:2px solid rgb(2, 0, 36,0.8);
}
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(51, 45, 110, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

export const Button = styled.button`
  width: 100%;

  margin: 10px 0;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(51, 45, 110, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
