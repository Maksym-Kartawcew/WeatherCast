import { TiWeatherPartlySunny } from "react-icons/ti";
import {
  HomeSection,
  HomeTitle,
  HomeButton,
  HomeDescr,
  ButtonBox,
  SectionIcon,
} from "@/components/Components.styled";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <HomeSection>
        <HomeDescr>
          <HomeTitle>What is the weather in Your city now?</HomeTitle>
          <ButtonBox>
            <Link href="/weather">
              <HomeButton type="button">Check now!</HomeButton>
            </Link>
          </ButtonBox>
        </HomeDescr>
        <SectionIcon>
          <TiWeatherPartlySunny fill="yellow" size="250px" />
        </SectionIcon>
      </HomeSection>
    </main>
  );
}
