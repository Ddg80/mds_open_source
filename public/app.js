const host = "http://localhost:3333/";
const urlsForm = document.getElementById("urlsForm");


urlsForm.addEventListener("submit", (e) => {

  const longurl = document.querySelector("#longurl").value.trim();
  const shortUrl = document.getElementById("short-url");
  const listUrls = document.querySelector("#list_urls tbody");
  e.preventDefault();
  if (longurl.length == 0) {
    alert("Enter valid url");
    return;
  }

  if (!(longurl.startsWith("http://") || longurl.startsWith("https://"))) {
    alert("Enter valid link");
    return;
  }

  PostDataJSON(longurl)
    .then((data) => {
      if (data) {
        shortUrl.innerText = data.urlId;
        shortUrl.href = `${host}api/${data.urlId}`;
        let html = `
				<tr>
					<td>${longurl}</td>
					<td>${data.urlId}</td>
				</tr>
			`;
        listUrls.innerHTML += html;
      }
    })
    .catch((error) => {
      alert("Something went wrong");
      console.log(error);
    })
    .finally(() => {
      getUrlsJSON()
        .then((data) => {
          let html = "";
          for (let i = 0; i < data.length; i++) {
            html += `
			  <tr>
				  <td>${data[i].origUrl}</td>
				  <td><a href="${host}api/${data[i].urlId}" target="_blank">${data[i].urlId}</a></td>
			  </tr>
		  `;
          }
          document.querySelector("#list_urls tbody").innerHTML = html;
        })
        .catch((error) => {
          alert("Something went wrong");
          console.log(error);
        });
        document.getElementById("urlsForm").reset();
    });
});

getUrlsJSON()
  .then((data) => {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      html += `
			  <tr>
				  <td>${data[i].origUrl}</td>
				  <td><a href="${host}api/${data[i].urlId}" target="_blank">${data[i].urlId}</a></td>
			  </tr>
		  `;
    }
    document.querySelector("#list_urls tbody").innerHTML = html;
  })
  .catch((error) => {
    alert("Something went wrong");
    console.log(error);
  });



async function PostDataJSON(longurl) {
  const response = await fetch(host + "api/create-short-url", {
    method: "POST",
    body: JSON.stringify({
      longurl: longurl,
    }),	
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const urls = await response.json();
  return urls;
}

async function getUrlsJSON() {
  const response = await fetch(host + "api/get-all-short-urls")
  const urls = await response.json();
  return urls;
}

