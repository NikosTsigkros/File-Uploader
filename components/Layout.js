import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "@emotion/styled";

const Main = styled("main")({
    height: "84vh",
    position: "relative",
});

const Layout = ({ children }) => (
    <>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
    </>
);

export default Layout;
