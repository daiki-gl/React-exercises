import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 30px auto;
  font-weight: bold;
  font-size: 24px;
  color: #4caf50;
`

export const HeaderButton = styled.button`
  padding: 8px 15px;
  background-color: #d31b1b;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #a01515;
  }
`
