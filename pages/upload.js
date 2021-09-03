import { useState } from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import Image from "next/image";
import UploadSvg from "../assets/svg/upload-file.svg";
import mq from "../components/helpers/mediaQueries";
import AudioFileSvg from "../assets/svg/audio-file.svg";
import TextFileSvg from "../assets/svg/text-file.svg";
import ImageFileSvg from "../assets/svg/image-file.svg";
import { colors } from "../components/helpers/variables";

const PageWrapper = styled("div")({
    // position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "inherit",
});

const MyCard = styled("div")({
    // position: "absolute",
    top: "0",
    left: "0",
    width: "80%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    // padding: "70px 0px",
    backgroundColor: "#f4f4f6",
    borderRadius: "20px",
});

const UploadIconWrapper = styled("Image")(
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

const TypesWrapper = styled("div")({
    paddingTop: "50px",
    display: "flex",
});

const ImageWrapper = styled("div")({
    width: "50px",
    height: "50px",
});

const CategoryType = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all ease .3s",
        ":not(:last-child)": {
            marginRight: "40px",
        },
        "&:hover": {
            opacity: "0.9",
            transform: "translateY(-10px)",
            borderRadius: "10px",
            backgroundColor: colors.orangeUpload,
        },
    },
    mq({
        padding: ["20px 10px", "20px 20px", "20px 60px"],
    })
);

const ArrowBack = styled("a")({
    color: colors.black,
    position: "absolute",
    top: "40px",
    left: "40px",
    zIndex: "10",
    textTransform: "uppercase",
    fontWeight: "bold",
    ":hover": {
        color: "red",
    },
});

const Upload = () => {
    const [activeSection, setActiveSection] = useState("typeSelector"); // typeSelector, uploader, showFile
    const [selectedFileType, setSelectedFileType] = useState(null);

    const DashedWrapper = styled("div")({
        border: "3px dashed #999",
        borderRadius: "10px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        h1: {
            fontSize: "1.4em",
            textTransform: "uppercase",
        },
        "&:hover": {
            cursor: "pointer",
        },
        position: "relative",
        zIndex: "9",
        backgroundColor:
            selectedFileType === "text"
                ? colors.paleBlue
                : selectedFileType === "audio"
                ? colors.paleGreen
                : selectedFileType === "image"
                ? colors.paleBrown
                : "",
    });

    const fileTypes = [
        {
            name: "text",
            image: {
                src: TextFileSvg,
                alt: "text-type-icon",
            },
        },
        {
            name: "audio",
            image: {
                src: AudioFileSvg,
                alt: "audio-type-icon",
            },
        },
        {
            name: "image",
            image: {
                src: ImageFileSvg,
                alt: "image-type-icon",
            },
        },
    ];

    const resetApp = () => {
        setActiveSection("typeSelector");
        setSelectedFileType(null);
    };

    const renderShowFileSection = () => (
        <DashedWrapper onClick={() => resetApp()}>
            <h1>Congratulations!</h1>
            <h1>Upload another file!</h1>
        </DashedWrapper>
    );

    const handleUploaderSectionClick = () => {
        setActiveSection("showFile");
    };

    const renderUploaderSection = (category) => (
        <DashedWrapper>
            <ArrowBack onClick={() => resetApp()}>Cancel</ArrowBack>
            <UploadIconWrapper onClick={() => handleUploaderSectionClick()}>
                <Image
                    src={
                        category === "text"
                            ? TextFileSvg
                            : category === "audio"
                            ? AudioFileSvg
                            : ImageFileSvg
                    }
                    alt="upload-icon"
                ></Image>
            </UploadIconWrapper>
            <h1>Upload your {category} File</h1>
        </DashedWrapper>
    );

    const handleCategoryClick = (category) => {
        setSelectedFileType(category);
        setActiveSection("uploader");
    };

    const renderTypeSelectorSection = () => (
        <DashedWrapper>
            <h1>Select the file type</h1>
            <TypesWrapper>
                {fileTypes.map((categoryType, key) => (
                    <CategoryType
                        key={key}
                        onClick={() => handleCategoryClick(categoryType.name)}
                    >
                        <ImageWrapper>
                            <Image
                                src={categoryType.image.src}
                                alt={categoryType.image.alt}
                            ></Image>
                        </ImageWrapper>
                        <h1 key={key}>{categoryType.name}</h1>
                    </CategoryType>
                ))}
            </TypesWrapper>
        </DashedWrapper>
    );

    const renderActiveSection = (activeSection) => {
        switch (activeSection) {
            case "showFile":
                return renderShowFileSection();
            case "uploader":
                return renderUploaderSection(selectedFileType);
            case "typeSelector":
                return renderTypeSelectorSection();
            default:
                return null;
        }
    };

    return (
        <Layout>
            <PageWrapper>
                <MyCard>{renderActiveSection(activeSection)}</MyCard>
            </PageWrapper>
        </Layout>
    );
};

export default Upload;
