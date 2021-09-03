import styled from "@emotion/styled";
import Layout from "../components/Layout";

const PageWrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const About = () => (
    <Layout>
        <PageWrapper>
            <h1>About</h1>
        </PageWrapper>
    </Layout>
);

export default About;
