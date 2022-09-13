import React from 'react'
import {useState, useEffect} from "react"

function Counter() {
    const [number, setNumber] = useState(0)
const [name,setName] = useState("")


useEffect(() => {
  console.log("Component mount edildi")

  setInterval(() => {
    setNumber((n) => n + 1)
    // burdaki n değeri setNumber fonksiyonunun içindeki number değeri
  }, 1000)

    // component unmount edildiğinde çalışacak kodlar
    return () => {console.log("Component unmount edildi")}
},[])
// [] bunun adı dependencies arraydir. İçi boş kalırsa anlamı component mount edildiği anı yakalarsın demek oluyor.

useEffect(() => {
  console.log("State güncellendi")
},[number])
// [number] dediğimizde sadece number state değiştiğinde çalışır.
  return (
    <div>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number + 1)}>Click</button>

    <hr />

    <h1>{name}</h1>
    <button onClick={() => setName("Kadri")}>Click</button>
    </div>
  )
}

export default Counter