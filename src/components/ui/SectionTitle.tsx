type Props={
    children:React.ReactNode;
}

export default function SectionTitle({
    children
}:Props){

    return(

        <h2 className="text-4xl font-bold mb-12">

            {children}

        </h2>

    );

}