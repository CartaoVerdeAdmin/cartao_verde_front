import PropTypes from "prop-types";
import { Container, IconContainer, StyledInput } from "./Styles";

export default function FormInput({
  inputKey,
  placeholder,
  error,
  register,
  defaultValue,
  type,
  icon: Icon,
  color,
  ...props
}) {
  const errorMessage = error[inputKey]?.message;
  return (
    <Container>
      <IconContainer>
        {Icon && (
          <Icon style={{ width: "2rem", height: "3.5rem", color: color }} />
        )}
        <StyledInput
          id={inputKey}
          inputKey={inputKey}
          type={type}
          autoComplete="off"
          {...(register && { ...register(inputKey) })}
          placeholder={placeholder}
          defaultValue={defaultValue}
          error={errorMessage}
          color={color}
          {...props}
        />
      </IconContainer>
    </Container>
  );
}

FormInput.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func,
  error: PropTypes.bool.isRequired,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.elementType,
};
