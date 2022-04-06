import md5 from "md5";

const Config = {
    baseUrl: "https://gateway.marvel.com",
    topic: "/v1/public/stories",
    //pubkey: "1a060481f3af6a9bfdf0b5960d25b6d9",
    //privkey: "83df4475ebf7cbc494b78df907a495b28421ab19"
    pubkey: "901ddfe28233b576678ffed15a7071d0",
    privkey: "dd8eb77633ebf0c37bd250d94b474851ce011d10"
}

const LoadResource = (url: string):Promise<any> => {
    url = url==""
        ? `${Config.baseUrl}${Config.topic}`
        : url
    let ts = new Date().getTime();
    let hash = md5(ts + Config.privkey + Config.pubkey);
    url = `${url}?ts=${ts}&apikey=${Config.pubkey}&hash=${hash}`
 
    return fetch(url)
       .then(res => res.json())
       .then(res => {
         return res.data.results
       });
}

export default LoadResource;