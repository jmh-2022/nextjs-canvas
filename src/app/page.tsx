import LineChart from '@/components/LineChart';
import LinePlot from '@/components/LinePloat';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function Home() {
    return (
        <main className="w-full h-full px-4 m-auto pt-56">
            <LineChart />
        </main>
    );
}
