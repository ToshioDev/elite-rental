import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="bg-[#ffffff] min-h-screen flex flex-col justify-center items-center font-sans overflow-hidden">
            <div className="flex flex-col items-center">
                <img 
                    src="https://cdn.discordapp.com/attachments/1369033988097966213/1388263392720060636/Untitled_design_30.png?ex=68605889&is=685f0709&hm=a80549e82a1801006f659cb0587be15aa31cec2925b7f1c1b6d949341187e818&"
                    alt="Elite Car Rental Logo"
                    className="w-20 h-20"
                />
                <div className="flex flex-row gap-5 mt-8">
                    <div 
                        className="w-[18px] h-[18px] rounded-full bg-[#c1ff00] animate-[waveJump_1.4s_ease-in-out_infinite]"
                        style={{ animationDelay: '0s' }}
                    ></div>
                    <div 
                        className="w-[18px] h-[18px] rounded-full bg-[#9b00ff] animate-[waveJump_1.4s_ease-in-out_infinite]"
                        style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div 
                        className="w-[18px] h-[18px] rounded-full bg-[#c1ff00] animate-[waveJump_1.4s_ease-in-out_infinite]"
                        style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div 
                        className="w-[18px] h-[18px] rounded-full bg-[#9b00ff] animate-[waveJump_1.4s_ease-in-out_infinite]"
                        style={{ animationDelay: '0.3s' }}
                    ></div>
                    <div 
                        className="w-[18px] h-[18px] rounded-full bg-[#000000] animate-[waveJump_1.4s_ease-in-out_infinite]"
                        style={{ animationDelay: '0.4s' }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;