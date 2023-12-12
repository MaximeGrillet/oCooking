export const authLogin = async (email: string, password: string) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

export const authRegister = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string,
) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

export const authCurrentUser = async (token: string) => {
  try {
    const response = await fetch("/api/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
