import React, { useState } from 'react'

const App = () => {
  const SNIPPETS = [
    'Wherefore art thou, JUANHULIO',
    "Is you is or is you ain't got cash money",
    'Antidisestablishmentarianism',
  ]
  const [snippet, setSnippet] = useState('')
  const [userText, setUserText] = useState('')

  const chooseSnippet = snippetIndex => () => {
    console.log('setSnippet', snippetIndex)
    setSnippet(SNIPPETS[snippetIndex])
  }
  const updateUserText = event => {
    setUserText(event.target.value)
    console.log('current userText', userText)
  }
  return (
    <div>
      <h2>Type Race</h2>
      <hr />
      <h3>Snippet</h3>
      {snippet}
      <input value={userText} onChange={updateUserText} />
      <hr />
      {SNIPPETS.map((SNIPPET, index) => {
        ;<button onClick={chooseSnippet(index)} key={index}>
          {SNIPPET.substring(0, 10)}...
        </button>
      })}
    </div>
  )
}

export default App
