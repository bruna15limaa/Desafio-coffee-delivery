import { TitleText } from "../../../../components/typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
    return (
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>
            <CoffeeList>
                <CoffeeCard/>
            </CoffeeList>
            <CoffeeCard />
        </OurCoffeesContainer>
    )
}