import HomeNavbar from "./HomeNavbar";
import Footer from "./Footer";
import styled from "@emotion/styled";

const Main = styled("main")({
    minHeight: "84vh",
});

const HomeLayout = ({ children }) => (
    <>
        <HomeNavbar />
        <Main>{children}</Main>
    </>
);

export default HomeLayout;
