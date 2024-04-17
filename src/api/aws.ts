export const getImages = async (postNumber: number): Promise<string[]> => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/aws/post/${postNumber}`,
      {
        credentials: "include",
      }
    );

    return res.json();
  } catch (e) {
    throw new Error(e + " + Failed to fetch data");
  }
};

export const createFolder = async (number: number) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/aws/post?nextPostNumber=${number}`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    return res.json();
  } catch (e) {
    throw new Error(e + " + Failed to fetch data");
  }
};

export const postImages = async (postNumber: number, formData: FormData) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/aws/post/${postNumber}`,
      {
        method: "POST",
        body: formData,
      }
    );

    return res.json();
  } catch (e) {
    throw new Error(e + " + Failed to fetch data");
  }
};

export const deleteImage = async (postNumber: number, fileName: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/aws/post/${postNumber}?fileName=${fileName}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: myHeaders,
      }
    );

    return res.json();
  } catch (e) {
    throw new Error(e + " + S3 이미지 삭제 실패");
  }
};
