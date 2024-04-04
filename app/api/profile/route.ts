import { NextApiRequest } from "next";
import { PersonData } from "./_modal";
import { ageHandler, genderHandler, nationHandler } from "./_helper";

export async function GET(request: NextApiRequest) {
    try {
        const { searchParams } = new URL(request.url ? request.url : "");
        const nameKeyword: string | null = searchParams.get('name');
        if (nameKeyword) {
            let personData: PersonData = { name: nameKeyword };
            personData.name = nameKeyword;
            //  TODO uncomment if you have exceed your IP address, api limit. 
            // comment these 3 lines
            // await ageHandler(personData);
            // await genderHandler(personData);
            // await nationHandler(personData);
            // uncomment the dummmy JSON Data            
            personData = {
                "name": "meelad",
                "age": 34,
                "gender": "male",
                "genderProbability": 0.99,
                "nation": "BH",
                "nationProbability": [
                    {
                        "country_id": "BH",
                        "probability": 0.17600587426521203
                    },
                    {
                        "country_id": "BD",
                        "probability": 0.155486759544664
                    },
                    {
                        "country_id": "AE",
                        "probability": 0.09259303743271151
                    },
                    {
                        "country_id": "LY",
                        "probability": 0.08800293713260601
                    },
                    {
                        "country_id": "IQ",
                        "probability": 0.08800293713260601
                    }
                ]
            };
            return Response.
                json(personData, { status: 201, headers: { 'Content-type': 'application/json' } });
        } else {
            return Response.
                json({
                    message: "Client Side Error: name of the person is not provided."
                }, { status: 401 });
        }
    } catch (e) {
        return Response.
            json({ message: `Internal Server Error: ${e}`, e }, { status: 500 });
    }
}