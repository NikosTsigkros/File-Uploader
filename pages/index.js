import Head from "next/head";
import Image from "next/image";
import HomeLayout from "../components/HomeLayout";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import { colors } from "../components/helpers/variables";
import mq from "../components/helpers/mediaQueries";
import Link from "next/link";

const PageWrapper = styled("div")({
    position: "relative",
});

const Showcase = styled("div")({
    backgroundColor: "blue",
    background: "url()",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: "1",
});

const Overlay = styled("div")({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    mixBlendMode: "overlay",
});

const Video = styled("video")({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: "0.8",
});

const Text = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "800px",
        textAlign: "center",
        color: colors.white,
        zIndex: "100",
        p: {
            marginBottom: "40px",
            fontSize: "1.2rem",
            lineHeight: "1.6",
        },
        a: {
            padding: "10px 30px",
            color: colors.white,
            textShadow: "0 1px 3px #000",
            fontSize: "1.1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            backgroundColor: colors.orangeUpload,
            borderRadius: "100px",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: colors.orangeUploadFaded,
            },
        },
    },
    mq({
        p: {
            padding: ["0px 50px", "0px 50px", "0px"],
        },
    })
);

const Home = () => (
    <HomeLayout>
        {/* <PageWrapper> */}
        <Showcase>
            <Text>
                <h1>Welcome to File Uploader</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, excepturi deleniti vitae tenetur voluptatem quia
                    dolorem ut blanditiis quas veritatis dignissimos vero nobis
                    aliquid, laudantium similique maxime optio? Omnis,
                    molestiae.
                </p>
                <Link href={"/upload"}>
                    <a>Upload Now</a>
                </Link>
            </Text>
            <Video src={"/waves.mp4"} muted loop autoPlay></Video>
            <Overlay />
        </Showcase>
        {/* </PageWrapper> */}
    </HomeLayout>
);

export default Home;
