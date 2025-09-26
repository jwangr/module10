import AddCatForm from "./AddCatForm";
import SingleCat from "./SingleCat";
import { useState } from "react";

export default function BigCats() {
  const [cats, setCatList] = useState([
    { name: "Cheetah", latinName: "Acinonyx jubatus" },
    { name: "Cougar", latinName: "Puma concolor" },
    { name: "Jaguar", latinName: "Panthera onca" },
    { name: "Leopard", latinName: "Panthera pardus" },
    { name: "Lion", latinName: "Panthera leo" },
    { name: "Snow leopard", latinName: "Panthera uncia" },
    { name: "Tiger", latinName: "Panthera tigris" },
  ]); // initialise an array of cats

  const [sort, setSort] = useState("Alphabetical");
  const [family, setFamily] = useState("Default");

  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handleFamily = (e) => {
    setFamily(e.target.value);
  };

  // filter logic: returns true, if genre is default or cat is in specific family
  function filterFamily(cat, family) {
    return (
      family === "Default" ||
      cat.latinName.toLowerCase().includes(family.toLowerCase())
    );
  }

  function sortABC(catList) {
    catList.sort(function (a, b) {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (y < x) {
        return 1;
      }
      return 0;
    });
    return catList;
  }

  const addNewCat = (newCat) => {
    const addedList = [...cats, newCat];
    const newList = sortABC(addedList);
    setCatList(newList);
  };

  let displayedCats = cats.filter((cat) => filterFamily(cat, family));
  sort === "Alphabetical" ? displayedCats : displayedCats.reverse();

  return (
    <>
      <AddCatForm addNewCat={addNewCat} />
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label>Sort by</label>
          <select className="custom-select" value={sort} onChange={handleSort}>
            <option selected>Alphabetical</option>
            <option>Reverse Alphabetical</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label>Family</label>
          <select
            className="custom-select"
            value={family}
            onChange={handleFamily}
          >
            <option>Default</option>
            <option>Panthera</option>
          </select>
        </div>
      </div>

      <div className="row">
        {displayedCats.map((cat) => (
          <SingleCat cat={cat} key={cat.name} />
        ))}
      </div>
    </>
  );
}
