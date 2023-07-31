import { Launch } from "./types";

export async function getLaunchById(id: string): Promise<Launch | undefined> {
  try {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/` + id)
      .then((response) => response.json())
    return res
  }
  catch (e) {
    console.log(e);
  }
}
