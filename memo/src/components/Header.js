import React from 'react'

function Header({number,data}) {
    console.log("Header Component rendered")
  return (
    
    <div>Header - {number}
    
    <code>{JSON.stringify(data)}</code>
    </div>
    
  )
}

export default React.memo(Header)