// https://developer.mozilla.org/en-US/docs/Glossary/HTML 
/*
- data type interface
  Document
  Node
  Element
  NodeList
  Attr
  NamedNodeMap
*/
// get attributes element  => element.attributes["att name"].value

console.log(document.childNodes[1])
console.log(document.COMMENT_NODE)
console.log(document.childNodes)
console.log(document.Attr)
let parent = document.querySelector(".parent")
console.log(parent.attributes["data-par"].value)
let hello = "mohamed salah";

