import { useEffect, useState } from "react"
import Card from "./card"
import axios from "axios";

const API_URL = "testapi.picca.co/api"
const API_KEY = 'piccadotco'
const API_ID = 123

export default function AllPiccas() {
    const [state, setState] = useState("")

    useEffect(() => {
        const api = {
            1: `https://${API_URL}/get_all_picca?api_id=${API_ID}&api_key=${API_KEY}`,
            2: `https://${API_URL}/get_all_picca?page=${1}&api_id=${API_ID}&api_key=${API_KEY}`,
        };

        const getPiccas = async() => {
            if (!state) {
                try {
                    const { data } = await axios.get(api[1], {
                        headers: {
                            Accept: "application/json",
                        }
                    })
                    // console.log(data)
                    setState(data?.data)
                } catch (error) {
                    console.log(error)
                }
            }
        }

        getPiccas()
    }, [state])

    const cardItem = Array.isArray(state) && state.map(item => {
        return <Card key={item?.id} imgUrl={item.flier_image} description={item.description} itemLink={item?.short_link} />
    })

    return (
        <div className="w-full md:max-w-6xl border px-4 md:p-8 rounded mx-10 md:mx-auto my-8 grid grid-cols-3 gap-5">
            {!state ? <>Loading.....</> : cardItem}
        </div>
    )
}