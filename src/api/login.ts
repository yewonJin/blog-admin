export const login = async (body: { id: string; password: string }) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    return await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth`, {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
      headers: myHeaders,
    }).then(async (res) => {
      if (!res.ok) {
        const { error } = await res.json();

        throw error;
      }
    });
  } catch (error) {
    throw error;
  }
};
