const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${myAPI.chrome}), Node.js (v${myAPI.node}), 和Electron (v${myAPI.electron})`

const btn1 = document.getElementById('btn1')
const input = document.getElementById('input')

btn1.onclick = ()=>{
    myAPI.saveFile(input.value)
}
