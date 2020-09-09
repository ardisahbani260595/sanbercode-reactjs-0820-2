import React, { useState, useEffect } from 'react'

const Hook = () => {
    const [name, setName] = useState("fadfas")
    const [count, setCount] = useState(0)

    const showName = (event) => {
        var getName = event.target.value
        setName(getName)
    }

    useEffect(() => {
        // Memperbarui judul dokumen menggunakan API browser
        document.title = `You clicked ${count} times`;
    });

    return (
        <>
            <input onChange={showName} value={name} />
            <h1>{name}</h1>
            <br />
            <br />
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}> Click To Added Counter</button>
        </>
    )
}

export default Hook;