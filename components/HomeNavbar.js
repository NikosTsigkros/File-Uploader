import styled from "@emotion/styled";
import Image from "next/image";
import mq from "./helpers/mediaQueries";
import BrandSvg from "../assets/svg/upload-file.svg";
import { colors } from "./helpers/variables";
import Link from "next/link";
import NavLink from "./NavLink";

const MyNavbar = styled("nav")({
    position: "absolute",
    width: "100%",
    backgroundColor: "transparent",
    color: colors.white,
    zIndex: "2",
});

const Container = styled("div")(
    {
        maxWidth: "1000px",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    mq({
        padding: ["0px 20px", "0px 50px", "0px"],
    })
);

const Logo = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    mq({
        fontSize: ["1em", "1.2em"],
    })
);

const LogoImageWrapper = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "10px",
    },
    mq({
        width: ["30px", "50px"],
        height: ["30px", "50px"],
    })
);

const Colored = styled("span")({
    color: colors.orangeUpload,
});

const Colored2 = styled("span")`
    color: red;
`;

const LinksWrapper = styled("ul")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red',
    width: "auto",
    li: {
        textDecoration: "none",
        listStyle: "none",
        "& a": {
            padding: "10px 20px",
            "&:hover": {
                backgroundColor: colors.orangeUpload,
                color: colors.dark3,
                borderRadius: "5px",
            },
        },
        "&:not(:last-child)": {
            marginRight: "20px",
        },
        "&:nav-link": {
            backgroundColor: "red",
        },
    },
});

const navLinks = [
    {
        name: "Upload",
        href: "/upload",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Prices",
        href: "/prices",
    },
];

const HomeNavbar = () => (
    <>
        <MyNavbar>
            <Container>
                <Link href="/">
                    <a>
                        <Logo>
                            <LogoImageWrapper>
                                <Image src={BrandSvg} alt="brand-icon"></Image>
                            </LogoImageWrapper>
                            <h1>
                                File<Colored>Uploader</Colored>
                            </h1>
                        </Logo>
                    </a>
                </Link>

                <LinksWrapper>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                href={link.href}
                                exact
                                className="nav-item nav-link"
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </LinksWrapper>
            </Container>
        </MyNavbar>
    </>
);

export default HomeNavbar;
