import {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'

import {
  Main,
  ButtonB,
  Editor,
  TextArea,
  ButtonI,
  ButtonU,
  Li,
  Ul,
} from './styledComponents'

const TextEditor = () => {
  const [text, setText] = useState('')
  const [italic, setItalic] = useState(false)
  const [bold, setBold] = useState(false)
  const [underLine, setUnderLine] = useState(false)

  const handleBold = () => {
    setBold(prevState => !prevState)
  }

  const handleItalic = () => {
    setItalic(prevState => !prevState)
  }

  const handleUnderLine = () => {
    setUnderLine(prevState => !prevState)
  }

  return (
    <Main>
      <div>
        <h1 style={{color: 'white', textAlign: 'center'}}>Text Editor</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
        />
      </div>
      <Editor>
        <Ul>
          <Li>
            <ButtonB
              data-testid="bold"
              onClick={handleBold}
              condition={bold === true}
            >
              <VscBold size={25} />
            </ButtonB>
          </Li>
          <Li>
            <ButtonI
              data-testid="italic"
              onClick={handleItalic}
              condition={italic === true}
            >
              <GoItalic size={25} />
            </ButtonI>
          </Li>
          <Li>
            <ButtonU
              data-testid="underline"
              onClick={handleUnderLine}
              condition={underLine === true}
            >
              <AiOutlineUnderline size={25} />
            </ButtonU>
          </Li>
        </Ul>
        <hr style={{color: '#334155'}} />
        <TextArea
          cols="80"
          rows="30"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter Text Here"
          isBold={bold === true}
          isItalic={italic === true}
          isUnderLine={underLine === true}
        >
          {text}
        </TextArea>
      </Editor>
    </Main>
  )
}

export default TextEditor
