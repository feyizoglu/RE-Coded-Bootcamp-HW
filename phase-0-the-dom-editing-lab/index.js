let body = document.getElementsByTagName("body")[0];
let h1 = document.createElement("h1");
h1.innerText = "My HTML adventure";
body.appendChild(h1);
let p = document.createElement("p");
p.innerHTML = `We're writing HTML markup to display in our <strong>browser</strong>.
We're basically telling computers what to do. <em>Neat!</em>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
markup to display in our <strong>browser</strong>.`;
body.appendChild(p);
let table = document.createElement("table");
table.innerHTML = `      <thead>
<tr>
  <th>Element name</th>
  <th>Display value</th>
</tr>
</thead>
<tbody>
<tr>
  <td>h1</td>
  <td>block</td>
</tr>
<tr>
  <td>p</td>
  <td>block</td>
</tr>
<tr>
  <td>strong</td>
  <td>inline</td>
</tr>
<tr>
  <td>em</td>
  <td>inline</td>
</tr>
</tbody>`;
body.appendChild(table);
