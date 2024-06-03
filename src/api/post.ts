import { Post } from "../domain/post";

export const getPosts = async (): Promise<Post[]> => {
  const result = await (
    await fetch(`${process.env.REACT_APP_BASE_URL}/posts`)
  ).json();

  return result;
};

export const getPostByPostNumber = async (
  postNumber: number
): Promise<Post> => {
  const result = await (
    await fetch(`${process.env.REACT_APP_BASE_URL}/posts/${postNumber}`)
  ).json();

  return result;
};

export const getNextPostNumber = async () => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/posts/nextPostNumber`
    );

    return res.json();
  } catch (e) {
    throw new Error(e + " + Failed to fetch data");
  }
};

export const addPost = async (body: Post) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    return await fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
      headers: myHeaders,
    });
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (body: Post) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    return await fetch(`${process.env.REACT_APP_BASE_URL}/posts`, {
      method: "PUT",
      body: JSON.stringify(body),
      credentials: "include",
      headers: myHeaders,
    });
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postNumber: number) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/posts/${postNumber}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: myHeaders,
      }
    );

    return res.json();
  } catch (e) {
    throw new Error(e + " + Failed to fetch data");
  }
};
