import axios from 'axios';
import { baseUrl } from 'constants/global';

type TUrl = string
type TMethod = string

const fetcher = async (url:TUrl, method:TMethod) => {
  const config = {
    method,
    url: `${baseUrl}${url}`,
  };
  try {
    const res: any = await axios.request(config);
    return res;
  } catch (err:any) {
    throw err?.response;
  }
};

export default fetcher;
