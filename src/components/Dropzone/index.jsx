import { ActionIcon, Box, Image, Loader, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useDropzone } from "react-dropzone";
import { Check, Photo, X } from "tabler-icons-react";
import { useEffect, useState } from "react";
import { uploadSingleFile } from "./firebase";

export default function DropZone({ form, name, folderName, label }) {
  const isMobile = useMediaQuery("(max-width: 820px)");
  const [url, urlSetter] = useState("");
  const [progress, setProgress] = useState(null);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      uploadSingleFile({ file, folderName, urlSetter, setProgress });
      // file.preview = URL.createObjectURL(file);
      form.setFieldValue(name, url);
    },
  });
  useEffect(() => {
    progress === 100 && form.setFieldValue(name, url);
  }, [name, progress, url]);
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        justifyContent: "center",
        backgroundColor: "white",
        padding: form.values[name] == null ? 5 : 0,
        overflow: "hidden",
        borderWidth: "2px",
        borderStyle: "dashed",
        borderColor: isDragAccept
          ? "success.main"
          : isDragReject
          ? "error.main"
          : "gray",
        borderRadius: 16,
        // width: "100%",
        height: 200,
        outline: "none",
        transition: "border .24s ease-in-out",
        // mx: "auto",
        marginInline:"100px",
        textAlign: "center",
        "&:hover": {
          borderColor: "#62A82C",
          cursor: "pointer",
          boxShadow: "0px 10px 20px 0px rgb(0,0,0,0.1)",
        },
      }}
      {...getRootProps()}
    >
      {form.values[name] == null ? (
        <>
          <input
            {...getInputProps()}
            onChange={(e) => {
              const file = e.target.files[0];
              file.preview = URL.createObjectURL(file);
              form.setFieldValue(name, file);
            }}
          />

          <Photo size={"25%"} />
          {isDragActive ? (
            <Text>Drop the files here ...</Text>
          ) : (
            <Text>Upload {label} here (pdf/jpeg/docx)</Text>
          )}
        </>
      ) : progress !== 100 ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {!progress && progress < 100 ? (
            <Loader h={"100%"} color="purple" m={"auto"} />
          ) : (
            <Image
              src={form.values[name]}
              alt="preview"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              withPlaceholder
              placeholder={<Loader h={"200px"} m={"auto"} color="purple" />}
            />
          )}
          <ActionIcon
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              color: "white",
              backgroundColor: "purple",
              padding: 3,
              borderRadius: "50%",
            }}
            onClick={(e) => {
              e.stopPropagation();
              form.setFieldValue(name, null);
            }}
          >
            <X />
          </ActionIcon>
        </Box>
      ) : (
        <Text style={{ display: "flex", alignItems: "center" }}>
          <Check color="purple" size={"50px"} />
          File Uploaded
        </Text>
      )}
      {form?.errors?.[name] && (
        <Text color="red" mt={10} size={isMobile ? "xs" : "sm"}>
          {form?.errors?.[name]}
        </Text>
      )}
    </Box>
  );
}
