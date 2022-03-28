const getData = (url, onSuccess) => {
  fetch(url)
    .then(response => {
      if(response.ok){
        return response.json();
      }

      throw new Error();
    })
    .then(result => {
        return onSuccess(result)
      }
    )
    .catch(() => onSuccess(false));
}

const sendData = (url, data, onSuccess, onFail) => {
  fetch(
    url,
    {
      method: "POST",
      body: data
    }
  )
  .then((response) => {
    if (response.ok) {
      onSuccess();
    }

    throw new Error();
  })
  .catch(() => onFail());
}

export { getData, sendData };

