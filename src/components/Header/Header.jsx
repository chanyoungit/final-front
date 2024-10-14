import * as style from "./style/Header";
import { useNavigate } from "react-router-dom";

export const Header = ({ children, color, background}) => {
    const navigation = useNavigate();
    return (
        <style.Layout color={color} background={background} >
           <style.Logo>
               <style.LogoText>
                   DeVita
               </style.LogoText>
           </style.Logo>
            {children}
        </style.Layout>
    );
};
export default Header;