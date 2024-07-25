import FAQ from '@components/FAQ'
import BottomCTA from '@components/BottomCTA'
import Jobs from '@components/careers/Jobs'
import Benefits from "@components/careers/Benefits";
import Values from "@components/careers/Values";
import CareerHero from "@components/careers/CareerHero";

export default function Careers() {
    return (
        <>
            <Values />
            <Benefits />
            <Jobs />
            <FAQ />
            <BottomCTA />
        </>
      );
}