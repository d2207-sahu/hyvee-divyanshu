
interface AgeData {
    count: number;
    name: string;
    age: number;
}

interface GenderData {
    count: number;
    name: string;
    gender: string;
    probability: number;
}


interface NationData {
    country_id: string;
    probability: number;
}

interface CountryUserData {
    count: number;
    name: string;
    country: NationData[];
}

interface PersonData {
    name: string;
    age?: number | 0;
    gender?: string | 'NA';
    genderProbability?: number;
    nation?: string;
    nationProbability?: NationData[]
}

export type { PersonData, CountryUserData, NationData, GenderData, AgeData }