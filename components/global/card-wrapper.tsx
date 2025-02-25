import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import AuthHeader from './auth-header'
import BackButton from './back-button'

interface CardProps {
    label : string
    title: string
    backButtonHref: string
    backButtonLabel: string
    children: React.ReactNode
}

const CardWrapper = ({label, title, backButtonHref, backButtonLabel, children} : CardProps) => {
  return (
    <Card className='shadow-md w-96'>
        <CardHeader>
            <AuthHeader label={label} title={title}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
    </Card>
  )
}

export default CardWrapper