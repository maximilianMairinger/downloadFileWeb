

export function downloadar(url: string, fileName: string = url) {
  let aElem = document.createElement("a")
  aElem.innerHTML = "Download"
  aElem.target = "_blank"
  aElem.href = url
  aElem.download = fileName
  aElem.click()
}

export default downloadar
