import styled from "@emotion/styled";
import { colors } from "./helpers/variables";

const MyFooter = styled("footer")({
    backgroundColor: colors.dark3,
    color: colors.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    p: {
        fontSize: "1.2em",
    },
});

const Footer = () => (
    <MyFooter>
        <p>Copyright &copy;</p>
    </MyFooter>
);

export default Footer;
