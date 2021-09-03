import styled from "@emotion/styled";
import Layout from "../components/Layout";

const PageWrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const Prices = () => (
    <Layout>
        <PageWrapper>
            <h1>Prices</h1>
        </PageWrapper>
    </Layout>
);

export default Prices;
