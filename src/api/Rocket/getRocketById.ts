import { Rocket } from "./types";

export async function getRocketById(id: string | undefined): Promise<Rocket | undefined> {
  try {
    const res = await fetch(`https://api.spacexdata.com/v4/rockets/` + id)
      .then((response) => response.json())
    return res
  }
  catch (e) {
    console.log(e);
  }
}
