export const fetchPost = async (url, payload, token) => {
  let resp;
  const headers = {
    "Content-Type": "application/json",
  };
  /* const headers = new Headers();
    headers.append('', '');
    headers.append('Content-Type', 'application/json');
  
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3005');
    headers.append('Access-Control-Allow-Credentials', 'true'); */
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  try {
    const data = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers,
    });
    resp = { data: await data.json() };
  } catch (e) {
    resp = { err: e.message };
  }
  return resp;
};

export const fetchPostFile = async (url, payload, token) => {
  let resp;
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  try {
    const data = await fetch(url, {
      method: "POST",
      body: payload,
      headers,
    });
    resp = { data: await data.json() };
  } catch (e) {
    resp = { err: e.message };
  }
  return resp;
};

export const fetchPut = async (url, payload, token) => {
  let resp;
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  try {
    const data = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers,
    });
    resp = { data: await data.json() };
  } catch (e) {
    resp = { err: e.message };
  }
  return resp;
};

export const fetchGet = async (url) => {
  let resp;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    console.log(url);
    const data = await fetch(url, {
      method: "GET",
      // mode: 'no-cors',
      headers,
    });
    // resp = { data: await data.json() };
    resp = await data.json();
    // console.log("c", resp);
    // resp = data.json();
  } catch (e) {
    resp = { err: e.message };
  }
  return resp;
};
