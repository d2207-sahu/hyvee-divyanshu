import { apiService } from "../_service";
import { AgeData, CountryUserData, GenderData, NationData, PersonData } from "./_modal";

const ageHandler = async (personData: PersonData) => {
    try {
        if (personData.name !== null) {
            const personAgeData: AgeData = await apiService(
                'GET',
                process.env.NEXT_API_BASE_AGE_URL + personData.name,
                {});
            personData.age = personAgeData.age;
        }
    } catch (error) {
        // TODO throw error
        console.error(error);
        personData.age = 0;
    }
};

const genderHandler = async (personData: PersonData) => {
    try {
        if (personData.name !== null) {
            const personGenderData: GenderData = await apiService(
                'GET',
                process.env.NEXT_API_BASE_GENDER_URL + personData.name,
                {});
            personData.gender = personGenderData.gender;
            personData.genderProbability = personGenderData.probability;
        }
    } catch (error) {
        console.error(error);
    }
};

const nationHandler = async (personData: PersonData) => {
    try {
        if (personData.name !== null) {
            const personNationData: CountryUserData = await apiService(
                'GET',
                process.env.NEXT_API_BASE_NATION_URL + personData.name,
                {});
            if (personNationData && personNationData.country) {
                personData.nation = _findNationWithHighestProbability(personNationData.country);
                personData.nationProbability = personNationData.country;
            }
        }
    } catch (error) {
        console.error(error);
    }
};

function _findNationWithHighestProbability(nationsData: NationData[]): string {
    return nationsData.reduce((acc, curr) => curr.probability > acc.probability ? curr : acc, nationsData[0])?.country_id;
}

export { ageHandler, genderHandler, nationHandler }