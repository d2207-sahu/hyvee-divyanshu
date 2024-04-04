"use client"
import { useProfile } from "@/hooks/useQueryHook";
import { useSearchParams } from 'next/navigation'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "@/components/client-side-components/back-button";
import { PersonDetail } from "@/components/server-side-components/PersonDetail";
import ErrorComponent from "@/components/server-side-components/error-component";
import LoadingComponent from "@/components/server-side-components/loading-component";

const NameComponent = () => {
    const searchparams = useSearchParams();
    const { data, isLoading, error } = useProfile({ name: searchparams.get("name") ?? "" });

    if (!searchparams.get("name")) {
        return <ErrorComponent error={"No Name Provided"} />;
    }

    if (isLoading) {
        return <LoadingComponent />
    }

    if (error) {
        return <ErrorComponent error={error} />;
    }

    let isMale: boolean = data?.gender?.trim().includes("male") ?? false;

    return (
        <div className="flex flex-col justify-center align-middle h-screen items-center">
            <BackButton />
            <h1 className={`text-2xl font-semibold font-roboto font-mono text-green-500 mb-5`}>{data?.name}</h1>
            <div className="flex flex-row justify-center items-center">
                <div className={`flex rounded-lg items-center ${!isMale ? "border-pink-500" : "border-blue-500"} border-4 border-solidshadow-lg p-6`}>
                    <div className={`flex items-center justify-center ${!data?.gender?.trim().includes("male") ? "bg-pink-500" : "bg-blue-500"} rounded-full w-24 h-24`}>
                        <FontAwesomeIcon icon={faUser} className="text-5xl" />
                    </div>
                    <table className="p-2 m-2 text-lg text-left">
                        <tbody>
                            {data?.age && < PersonDetail
                                headingText={"Age"}
                                detailText={`${data.age}`} />
                            }
                            {data?.gender && < PersonDetail
                                headingText={"Gender"}
                                detailText={data.gender} />
                            }
                            {data?.nation && < PersonDetail
                                headingText={"Nation"}
                                detailText={data.nation} />
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default NameComponent