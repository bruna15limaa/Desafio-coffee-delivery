import { IntroConteiner, IntroContent, IntroTitle } from "./styles";
import IntroImg from '../../../../assets/coffee-intro.png'

export function Intro() {
    return(
        <IntroConteiner>
           <IntroContent className="container">
            <div>
                <section>
                    <IntroTitle size="xl">
                    Encontre o café perfeito para qualquer hora do dia
                    </IntroTitle>
                </section>
            </div>
            <img src={IntroImg} alt="" />
           </IntroContent>
        </IntroConteiner>
    )
}