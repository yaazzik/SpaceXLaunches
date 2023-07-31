import { Launch } from "./types";

export async function getLaunches(): Promise<Launch[] | undefined> {
    try {
        const res = await fetch('https://api.spacexdata.com/v5/launches')
            .then((response) => response.json())
        return res
    }
    catch (e) {
        console.log(e);
    }
}
