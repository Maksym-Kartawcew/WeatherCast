import { TiWeatherPartlySunny } from "react-icons/ti";
import {
  HomeSection,
  HomeTitle,
  HomeButton,
  HomeDescription,
  ButtonBox,
  SectionIcon,
} from "@/components/Components.styled";
import Link from "next/link";
import { links } from "@/config/links";

export default function Page() {
  return (
    <main>
      <HomeSection>
        <HomeDescription>
          <HomeTitle>What is the weather in Your city now?</HomeTitle>
          <ButtonBox>
            <Link href={links.weather.href}>
              <HomeButton type="button">Check now!</HomeButton>
            </Link>
          </ButtonBox>
        </HomeDescription>
        <SectionIcon>
          <TiWeatherPartlySunny fill="yellow" size="250px" />
        </SectionIcon>
      </HomeSection>
    </main>
  );
}
