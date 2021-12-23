import { useEffect, useState } from "react"

interface List {
    id: string;
    name: string
}
interface EventProps extends Event {
    detail: List
}

export function App() {
    const [list, setList] = useState<List[]>([])

    function updateList(item: List) {
        setList((oldList) =>
            [...oldList,
                item
            ]
        )
    }
useEffect(() => {
    window.addEventListener('@gkf/react-app/addlist', (e:EventProps) => {
        updateList(e.detail)
    })

},[])


    return (
        <div>
            {list.map((item, index) => (
                <div key={index}>
                    {item.name}
                    {item.id}
                   
                </div>
            ))}
        </div>
    )
}