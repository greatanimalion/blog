
import TextType from '@/components/t/textType'
export default function Intro() {
    return (
        <div className="intro h-full w-full">
            <div className="min-h-screen w-full relative">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
                    }}
                />
                <div className="text-center pt-[30vh]!">
                    <TextType
                        text={["人生得意需尽欢", "莫使金酒空对月"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="_"
                        deletingSpeed={100}
                        cursorBlinkDuration={0.5}
                        style={{
                            position: "relative",
                            zIndex: 9,
                            color: "black",
                            fontSize: "5rem",
                            fontWeight: "bold",
                        }}
                    /> 
                    </div>
            </div>

        </div>
    )
}