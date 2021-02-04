import { Link } from "react-router-dom";
import styled from "styled-components";
import "./button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn--large"];

type Props = {
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  buttonStyle: string;
  buttonSize?: string;
};

const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize!) ? buttonSize : SIZES[0];

  return (
    <BtnMobile to='/sign-up' className='btn-mobile'>
      <Btn
        className={`${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </Btn>
    </BtnMobile>
  );
};

export default Button;

const Btn = styled.button`
  padding: 8px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 6px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const BtnMobile = styled(Link)`
  @media screen and (max-width: 960px) {
    display: block;
    text-decoration: none;
  }
`;
