
import {useTranslations} from 'next-intl';

export default function HomePage({params}) {
  
  
  
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <h1>{t('about')}</h1>

    </div>
  );
}