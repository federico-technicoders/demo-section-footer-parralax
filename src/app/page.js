import { Footer } from "@/components/Footer";


export default function Home() {
    return (
        <div className="relative items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-green-300 -z-50">
        <main className="flex flex-col justify-start items-start sm:items-start w-full ">
            <section                  
                className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
            >
                <div 
                    className='flex justify-center items-center w-full h-full bg-black'
                >
                    <h2 className="text-5xl text-white font-bold">
                        Sección Equipo
                    </h2>
                </div>
            </section>
            <section                  
                className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
            >

                <div 
                    className='flex justify-center items-center w-full h-full bg-black'
                >
                    <h2 className="text-5xl text-white font-bold">

                        Sección Tecnología
                    </h2>
                </div>
            </section>
            <section                  
                className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
            >
                <div 
                    className='flex justify-center items-center w-full h-full bg-black'
                >
                    <h2 className="text-5xl text-white font-bold">

                        Sección Testimonio
                    </h2>
                </div>
            </section>
            <section                  
                className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
            >
                <div 
                    className='flex justify-center items-center w-full h-full bg-black'
                >
                    <h2 className="text-5xl text-white font-bold">

                        Sección Contacto
                    </h2>
                </div>
            </section>
        </main>
        <Footer />

    </div>
    );
}
