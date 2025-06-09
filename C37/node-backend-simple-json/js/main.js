document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?game=${userName}`)
  const data = await res.json()

  console.log(data);
  // document.querySelector("#personName").textContent = data.name
  // document.querySelector("#personStatus").textContent = data.status
  // document.querySelector("#personOccupation").textContent = data.currentOccupation
  document.querySelector("#clickMe").textContent = data.flip;
  document.querySelector("#clickMe").style.backgroundColor = data.flip === 'heads' ? 'green' : 'grey';

}