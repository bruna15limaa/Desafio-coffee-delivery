import { BenefitsContainer, IntroConteiner, IntroContent, IntroTitle } from "./styles";
import IntroImg from '../../../../assets/coffee-intro.png'
import { RegularText } from "../../../../components/typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { Package, ShoppingCart } from "phosphor-react"; 
import { useTheme } from "styled-components";

export function Intro() {
    const { colors } = useTheme();
    return(
        <IntroConteiner>
           <IntroContent className="container">
            <div>
                <section>
                    <IntroTitle size="xl">
                    Encontre o café perfeito para qualquer hora do dia
                    </IntroTitle>
                    <RegularText size="l" color="subtitle" as="h3">
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </RegularText>
                </section>

                <BenefitsContainer>
                    <InfoWithIcon
                    icon={<ShoppingCart weight="fill"/>}
                    />
                    <p>Compra simples e segura</p>
                    <p>Entrega rápida e rastreada</p>
                    <p>Embalagem mantém o café intacto</p>
                    <p>Embalagem mantém o café intacto</p>
                </BenefitsContainer>
            </div>
            <img src={IntroImg} alt="" />
           </IntroContent>
        </IntroConteiner>
    )
}