export const uploadFileToS3 = async (presignedUrl: string, file: File) => {
  const response = await fetch(presignedUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (!response.ok) {
    throw new Error(`S3 upload failed: ${response.status}`);
  }
  // console.log(response);
  return response;
};
