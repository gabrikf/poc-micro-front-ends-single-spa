import { useState } from "react"
import Parcel from 'single-spa-react/parcel'


export function App() {
    const [name, setNamer] = useState('')
    const [id, setId] = useState('')
    function handleSubmit(event) {
        event.preventDefault()
        dispatchEvent(new CustomEvent(
            '@gkf/react-app/addlist',
            {
                detail: {
                    name,
                    id
                }
            }

        ))
        setNamer(''),
            setId('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setNamer(e.target.value)} value={name} type="text" />
                <input onChange={e => setId(e.target.value)} value={id} type="text" />
                <button type="submit">Aperte</button>
            </form>
            <div>
                <Parcel 
                config={() => System.import('@gkf/parcel')}
                />
            </div>
        </div>
    )
}