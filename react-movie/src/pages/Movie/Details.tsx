import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Hero } from "../../components";
import { movie } from "../../services/request";


const Details: React.FC = () => {
    const { id }: any = useParams();

    const [result, setResult] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(async () => {
            setIsLoading(true);
            try {
                const response = await movie.getDetailsById(id);
                setResult(response)
                console.log(" details useState >> ", response)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }

        }, 2000)
    }, [isLoading, id])

    return (
        <div>
            <Hero results={result} isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
    )
}

export default Details
