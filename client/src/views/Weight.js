import { useTranslation } from 'react-i18next'

const Weight = () => {

  const { t } = useTranslation()

  return (
    <h2>{ t('views.weight') }</h2>
  )

}

export default Weight