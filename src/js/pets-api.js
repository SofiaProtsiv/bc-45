const API_KEY =
    "live_8d2JOTBlvMIstB5M3kZsPsk8hZUCD6nOkvuAVVyXi4XBLVG4l245hTo9lEbIheab";
const BASE_URL = "https://api.thecatapi.com/v1";

// GET
export const getCats = () => {
    // const options = {
    //     "Access": "*",
    //     "Access-Control-Allow-Origin": "*"
    // }

    return fetch(`${BASE_URL}/images?limit=10&api_key=${API_KEY}`).then(res => {
        if (res.ok) {
            return res.json()
        }

        throw new Error(res.statusText)
    })
};
// GET
export const getCatById = (id) => {

    return fetch(`${BASE_URL}/images/${id}`).then(res => {
        if (res.ok) {
            return res.json()
        }

        throw new Error(res.statusText)
    })
};

// POST
export function uploadImage(image) {
    const formData = new FormData()
    formData.append("file", image)

    const options = {
        method: "POST",
        body: formData,
        headers: {
            "x-api-key": API_KEY
        },
    }

    return fetch(`${BASE_URL}/images/upload`, options).then(res => {
        if (res.ok) {
            return res.json()
        }

        throw new Error(res.statusText)
    })

}

// DELETE
export const deleteCat = (id) => {
    const options = {
        method: "DELETE",
        headers: {
            "x-api-key": API_KEY
        },
    }

    return fetch(`${BASE_URL}/images/${id}`, options).then(res => {
        if (res.ok) {
            return res
        }

        throw new Error(res.statusText)
    })
};
