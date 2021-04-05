

export function downloadFileWeb(url: string) {
  let aElem = document.createElement("a")
  aElem.innerHTML = "Download"
  aElem.href = url
  aElem.download = "true"
  aElem.click()
}

export default downloadFileWeb
