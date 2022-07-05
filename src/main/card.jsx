import { Link } from "react-router-dom";

export default function Card({ imgUrl, description, itemLink }) {
    return (
        <Link to={`/${itemLink}`} target="_blank" className="rounded space-y-3 h-[300px] shadow">
            <div className="w-full h-[220px]">
                <img src={`https://testapi.picca.co/storage/${imgUrl}`} alt="" className="w-full h-full rounded-t-md" />
            </div>
            <div className="w-full p-4 line-clamp-1"
                // style={{
                //     wordWrap: "break-word"
                // }}
            >
                {description}
            </div>
        </Link >
    )
}