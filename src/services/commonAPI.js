import axios from "axios"

const commonAPI=async(httpmethod,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpmethod,
        url,
        data:reqBody,
        headers:reqHeader
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI