import { useTranslation } from 'react-i18next'



export default function login({
    ...props
}) {
    const { t } = useTranslation()
    
    return (
        <div>
           <h1>{t('login.title')}</h1>
        </div>
    )
}