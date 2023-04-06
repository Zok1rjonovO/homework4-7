const Api = {
    GET: async (value) => {
        try{
            
            let data = await fetch(`https://jsonplaceholder.typicode.com/${value}`)
              .then((res) => res.json())
              .then((data) => data)
              .catch((error) => console.log(error));
            
            return data;
        }catch{
            return undefined 
        }
    },
    POST: async (value,  data) => {
        try{
            let respons = await fetch(`https://jsonplaceholder.typicode.com/${value}`,{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            }
            ).then(res => res.json())
            .then(json => json);

            return respons;
        }catch{
            
        }
        
    }
}

export {Api}