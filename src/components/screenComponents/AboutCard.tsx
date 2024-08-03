
interface Props{
    title: string;
    message:string;
}

const AboutCard : React.FC<Props>= ({title, message}) => {
    return (
        <div className="flex flex-col items-start justify-start gap-3 p-5 border border-gray-500 rounded-xl">
            <h1 className="text-2xl text-regular">{title}</h1>
            <p className="text-gray-500 ">{message}</p>
        </div>
    )
}

export default AboutCard