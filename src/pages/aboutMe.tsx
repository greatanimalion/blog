import CardSwap, { Card } from "@/components/t/MagicBento";

export default function AboutMe() {
    return (
        <div>
            <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
            >
                <Card>
                    <h3 className="text-2xl font-bold text-white text-center">Card 1</h3>
                    <p>Your content here</p>
                </Card>
                <Card>
                    <h3 className="text-2xl font-bold text-white text-center">Card 2</h3>
                    <p>Your content here</p>
                </Card>
                <Card>
                    <h3 className="text-2xl font-bold text-white text-center">Card 3</h3>
                    <p>Your content here</p>
                </Card>
            </CardSwap>
        </div>
    )
}