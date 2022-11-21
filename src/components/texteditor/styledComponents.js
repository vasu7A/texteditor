import styled from 'styled-components'

export const Main = styled.div`
  background-color: #1b1c22;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
`
export const ButtonB = styled.button`
  color: ${props => (props.condition ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const ButtonI = styled.button`
  color: ${props => (props.condition ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const ButtonU = styled.button`
  color: ${props => (props.condition ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const Editor = styled.div`
  background-color: #25262c;\
  min-width: 45vw;
  min-height: 80vh;
  margin: 10px;
  padding: 10px;
`

export const TextArea = styled.textarea`
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderLine ? 'underline' : 'normal')};
  background-color: transparent;
  outline: none;
  resize: none;
  color: white;
`
export const Li = styled.li`
  list-style-type: none;
  display: inline;
`
export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
`
