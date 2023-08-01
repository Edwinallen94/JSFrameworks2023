import axios from "axios";
// Import something here
import useSWR from "swr";

const fetcher = (...args) => axios(...args).then((res) => res.data.fact);

function CatFact() {
  const { data } = useSWR("https://catfact.ninja/fact", fetcher, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  });

  return <blockquote>{data}</blockquote>;
}

export default CatFact;
