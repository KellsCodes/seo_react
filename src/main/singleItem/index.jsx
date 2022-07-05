import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function SingleItem() {
    const location = useLocation();
    const [itemDetail, setItemDetail] = useState("")

    useEffect(() => {
        async function getDetails() {
            try {
                const { data } = await axios.get(`https://testapi.picca.co/api/getPiccaBylink/${location.pathname.slice(1)}?api_id=123&api_key=piccadotco`, {
                    headers: {
                        Accept: "application/json",
                    }
                })
                setItemDetail({ ...data })
            } catch (error) {
                console.log(error)
            }
        }

        if (!itemDetail) {
            getDetails()
        }
    }, [itemDetail])

    // console.log(itemDetail)
    console.log(window.location.href)

    return (
        <div className="flex flex-col space-y-3 border max-w-4xl p-8 rounded m-10">
            {!itemDetail ? <>Loading....</> :
                <>
                    <Helmet>
                        <title>{"Picca |" + " " + itemDetail?.picca_name}</title>
                        <meta property={"og:title"} content={itemDetail?.picca_name} />
                        <meta name={"description"} content={itemDetail?.description} />
                        <meta property={"og:description"} content={itemDetail?.description} />
                        <meta property={"og:image"} content={!itemDetail?.banner ? `https://testapi.picca.co/storage/${itemDetail?.flier_image}` : `https://testapi.picca.co/storage/${itemDetail?.banner}`} />
                        <meta property={"og:url"} content={window.location.href} />
                        <meta name={"twitter:card"} content={"summary_large_image"} />
                        <meta name={"twitter:image:alt"} content={itemDetail?.picca_name} />
                        <meta property={"og:site_name"} content={"Picca.co"} />
                        <meta property="og:image:width" content="1431" />
                        <meta property="og:image:height" content="1328" />
                        {/* <meta property="og:image:type" content={imgType} /> */}
                        <meta property="og:image:type" content='image/jpg' />
                        <meta name="twitter:label1" content="Est. reading time" />
                        <meta name="twitter:data1" content="5 minutes" />
                    </Helmet>
                    <div>
                        <img src={`https://testapi.picca.co/storage/${itemDetail?.flier_image}`} alt="" className="w-full object-cover rounded-t-md" />
                    </div>
                    <div>
                        {itemDetail?.description}
                    </div>
                </>
            }
        </div >
    )
}