const insert = document.getElementById("insert");
window.addEventListener('keydown',(e) =>{//Detect key press(Keydown event)
    insert.innerHTML=`
    <div class='color'>
    <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr> 
</table>
    </div> `
})
//? it is a ternary operator, it is used to check if the key pressed is a space or not. If it is a space, it will display 'Space' instead of an empty string.