import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderContainer, FormSectionContainer } from "./styles";
import { MapPinLine } from "phosphor-react";
import { AddressForm } from "./Addressform";

export function CompleteOrderForm() {
    const {colors} = useTheme()

    return(
        <CompleteOrderContainer>
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>

            <FormSectionContainer>
                <SectionTitle 
                title="Endereço de Entrega" 
                subtitle="Informe o endereço onde deseja receber seu pedido"
                icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22}/>}
                />

                <AddressForm />
            </FormSectionContainer>
        </CompleteOrderContainer>
    )
}