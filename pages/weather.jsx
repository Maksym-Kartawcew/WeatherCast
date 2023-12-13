import WeatherComponent from "@/components/Weather";
import PagesLayoyt from "@/components/PagesLayout";

export default function WeatherPage() {
  return (
    <PagesLayoyt>
      Weather
      <WeatherComponent />
    </PagesLayoyt>
  );
}
