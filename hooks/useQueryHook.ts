import profileService from "@/service/profileService";
import { useEffect, useState } from "react";
import { PersonData } from "@/modal/modal";

const useProfile = ({ name }: { name: string }) => {
    const [data, setData] = useState<PersonData>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            console.log(name)

            try {
                let responseData = await profileService.getProfile(name);
                setData(responseData);
                setIsLoading(false);
            } catch (err) {
                console.log(err)
                setError(`${err}`);
                setIsLoading(false);
            }
        }
        getData();
    }, [name]);

    return { data, isLoading, error }
};

export { useProfile }
