import { formData } from "./forms";  //importing different ts files into entry file

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});

const person: any = {};
console.log(person.speak());      //this would generate error!!
