import { PersonData } from "@/modal/modal";
import { apiService } from "./apiService";

class ProfileService {
    /**
   * Get By Name
   * @returns
   */
    async getProfile(name: string) {
        console.log(name)
        let personData: PersonData = await apiService(
            'GET',
            name,
            {});
        return personData;
    }
}

const profileService = new ProfileService()

export default profileService;