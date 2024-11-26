
import axios from 'axios';
// import {useTranslations} from 'next-intl';

export default async  function HomePage({params}) {
  let {locale}=params
  




  async function fetchData() {
    




    try {
      const response = await axios.get(`https://psdrupal.bicsglobal.com/${locale}/jsonapi/node/text_slider`, {
      
      });
  
      console.log(response.data); // Log the response data from the API
      return response.data
    } catch (error) {
      console.error('Error fetching data:', error); // Log any errors
    }
  }

  const data= await fetchData()
  console.log(data)
  // const t = useTranslations('HomePage');
  return (
    <div>
      {/* <h1>{t('title')}</h1>
      <h1>{t('about')}</h1> */}
      
      {/* <h1>api dataa :{JSON.stringify(data)}</h1> */}
      

<h1 className="text-center w-full mt-10">{data?.data[0]?.attributes?.title}</h1>

</div>
    
  );
}