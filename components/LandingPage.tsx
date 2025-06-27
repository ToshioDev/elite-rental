
import React from 'react';

const LandingPage: React.FC = () => {
    return (
        // Set a strict viewport height and flex-col layout to contain everything.
        <div className="bg-[#ffffff] flex flex-col">
            <header 
                className="w-full bg-center bg-cover bg-no-repeat rounded-b-[30px] flex flex-col items-center justify-end pt-0 pb-[30px] min-h-[180px]"
                style={{ backgroundImage: "url('https://cdn.discordapp.com/attachments/875794546024407093/1388295326527393803/raw.png?ex=68607647&is=685f24c7&hm=bd12a49f904ee626c81bfc9b63c87decb2905dea5a338aabb18c85b845a6cf27&')" }}
            >
                <nav className="w-full flex items-center justify-between px-4 sm:px-8 py-2 box-border min-h-[70px]">
                    <div className="flex items-center gap-4">
                        <img 
                            src="https://cdn.discordapp.com/attachments/1369033988097966213/1388262667730292787/Untitled_design_29.png?ex=686057dc&is=685f065c&hm=5f420d0207b34f40fef4ddd62b7be93cc2b8bb56543aa80974e923aee903e716&"
                            alt="Elite Car Rental Logo"
                            className="h-20 block bg-transparent"
                        />
                    </div>
                </nav>
                <div className="text-white text-2xl sm:text-3xl font-bold text-center tracking-wide mt-[1.2rem] mb-[0.5rem] mx-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.65)' }}>
                    Tu opción de confianza para alquilar el vehículo perfecto
                </div>
                <div className="flex justify-center gap-6 mb-[1.2rem]">
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white transition-colors duration-300 hover:text-[var(--purple)]">
                        <i className="fab fa-instagram text-3xl"></i>
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white transition-colors duration-300 hover:text-[var(--purple)]">
                        <i className="fab fa-facebook-f text-3xl"></i>
                    </a>
                </div>
            </header>

            {/* `flex-1` makes this main section grow to fill all available space. */}
            {/* `overflow-hidden` prevents any potential scrollbars within this container. */}
            <main className="flex-1 w-full bg-[#ffffff] overflow-auto">
               <div className="w-full h-full">
                 <iframe
                     title="Booking Widget"
                     className="w-full h-full min-h-[1000px] no-scrollbar"
                     style={{
                         border: 'none',
                         minHeight: '1000px',
                         display: 'block',
                         overflow: 'hidden',
                         scrollbarWidth: 'none', // Firefox
                         msOverflowStyle: 'none' // IE 10+
                     }}
                     src="https://rentsyst.com/settings/iframe-constructor/?token=tncPYBbzZGqPP0w9wa5-Z85Cu_vS6Pqx&id=7967"
                 ></iframe>
               </div>
            </main>

            <footer className="text-center p-4 bg-[#6d6d6d] text-white text-base tracking-wide">
                &copy; {new Date().getFullYear()} Elite Car Rental. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default LandingPage;
