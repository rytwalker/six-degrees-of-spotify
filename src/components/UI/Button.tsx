import styled from "styled-components";

const Button = styled.button`
  font-size: ${({ theme }) => theme.typeScale.header5};
  border-radius: 4px;
  cursor: pointer;
  padding: 12px 24px;
  min-width: 100px;
  border: transparent;
  font-family: ${({ theme }) => theme.primaryFont};
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.2s all;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${({ theme }) => theme.primaryColorActive};
    border-color: ${({ theme }) => theme.primaryColorActive};
    color: ${({ theme }) => theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};

  &:hover {
    background-color: ${({ theme }) => theme.primaryColorHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
    color: ${({ theme }) => theme.textOnDisabled};
    cursor: not-allowed;
  }
`;
